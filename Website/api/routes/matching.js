const router = require("express").Router();
const Mentor = require("../models/mentor");
const Mentee = require("../models/mentee");

//Request for a mentor
router.post("/", async (req, res) => {
  const { email } = req.body;
  Mentee.findOne({ email }, async (err, mentee) => {
    if (err) {
      return res.status(500).json({
        message: { msgBody: "Some error has occured", msgError: true },
      });
    }

    if (!mentee) {
      return res.status(400).json("No such mentee exits");
    }

    const language = mentee.language;
    const aspiration = mentee.aspiration;

    Mentor.find(
      { language: { $in: language }, currentPeer: "" },
      async (err, mentors) => {
        if (err) {
          return res.status(500).json({
            message: {
              msgBody: "Some error has occured in fetching mentors",
              msgError: true,
            },
          });
        }

        for (let idx = 0; idx < mentors.length; idx++) {
          const mentor = mentors[idx];
          if (mentor.skills.includes(aspiration)) {
            await Mentee.findOneAndUpdate(
              { email: mentee.email },
              { currentPeer: mentor.email }
            );
            await Mentor.findOneAndUpdate(
              { email: mentor.email },
              { currentPeer: mentee.email }
            );
            return res.status(200).json(mentor);
          }
        }

        if (mentors.length != 0) {
          await Mentee.findOneAndUpdate(
            { email: mentee.email },
            { currentPeer: mentors[0].email }
          );
          await Mentor.findOneAndUpdate(
            { email: mentors[0].email },
            { currentPeer: mentee.email }
          );
          return res.status(200).json(mentors[0]);
        }

        Mentor.find(
          { skills: { $in: [aspiration] }, currentPeer: "" },
          async (err, mentors) => {
            if (err) {
              return res.status(500).json({
                message: {
                  msgBody: "Some error has occured in fetching mentors",
                  msgError: true,
                },
              });
            }

            if (mentors.length != 0) {
              await Mentee.findOneAndUpdate(
                { email: mentee.email },
                { currentPeer: mentors[0].email }
              );
              await Mentor.findOneAndUpdate(
                { email: mentors[0].email },
                { currentPeer: mentee.email }
              );
              return res.status(200).json(mentors[0]);
            }

            return res.status(500).json({
              message: {
                msgBody: "No mentor available",
                msgError: false,
              },
            });
          }
        );
      }
    );
  });
});

module.exports = router;