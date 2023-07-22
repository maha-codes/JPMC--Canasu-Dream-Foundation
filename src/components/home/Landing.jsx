import React from "react";
import "./Landing.css";
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

const otherFontTheme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#6e48aa',
  headerFontColor: '#fff',
  headerFontSize: '16px',
  botBubbleColor: '#6E48AA',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a'
};

function Landing({ handleClick }) {
  return (
    <div className="landing">
      <div className="landing-content">
      <h1>The Power <br>
      </br>of Good Advice</h1>
      <p>Unleash your potential through mentorship. MentorWave takes you through a journey of self-advancement and fulfillment.</p>
      <button type="button" className="sign-up" onClick={handleClick}>
        <b> <i className="signup icon"></i>Join Now!</b>
      </button>
      <img src="/Mentee.png" alt="mentee"id="mentee-image" />
      </div>
      <div className="landing-chatbot">
        <ThemeProvider theme={otherFontTheme}>
        <ChatBot
          floating={true}
          steps={[
            {
              id: '1',
              message: 'What is your gender?',
              trigger: '2'
            },
            {
              id: '2',
              options: [
                { value: 1, label: 'Male', trigger: '3' },
                { value: 2, label: 'Female', trigger: '3' },
              ]
            },
            
            {
              id: '3',
              message: "Which age category do you belong to?",
              trigger: '4'
            },
            {
              id: '4',
              options: [
                { value: ">=18", label: '18 and above', trigger: '5' },
                { value: "<18", label: 'Below 18', trigger: '5' },
              ],
            },
            
            {
              id: '5',
              message: 'Do you have 3 hours per week to commit for the mentoring program?',
              trigger: '6'
            },
            {
              id: '6',
              options: [
                { value: true, label: 'Yes', trigger: '7' },
                { value: false, label: 'No', trigger: '13' },
              ],
            },
            
            {
              id: '7',
              message: 'What are your available days for this mentoring program',
              trigger: '8'
            },
            {
              id: '8',
              options: [
                { value: 0, label: 'Monday', trigger: '9' },
                { value: 1, label: 'Tuesday', trigger: '9' },
                { value: 2, label: 'Wednesday', trigger: '9' },
                { value: 3, label: 'Thursday', trigger: '9' },
                { value: 4, label: 'Friday', trigger: '9' },
                { value: 5, label: 'Saturday', trigger: '9' },
                { value: 6, label: 'Sunday', trigger: '9' },
              ],
            },
            
            {
              id: '9',
              message: 'What are your availabe time slots for this program?',
              trigger: '10'
            },
            {
              id: '10',
              options: [
                { value: 0, label: '9AM - 12PM', trigger: '11' },
                { value: 1, label: '12PM - 3PM', trigger: '11' },
                { value: 2, label: '3PM - 6PM', trigger: '11' },
                { value: 3, label: '6AM - 9PM', trigger: '11' }
              ],
            },
            
            {
              id: '11',
              message: 'Do you agree to attend all scheduled mentoring sessions?',
              trigger: '12'
            },
            {
              id: '12',
              options: [
                { value: true, label: 'Yes', trigger: '13' },
                { value: false, label: 'No', trigger: '13' },
              ],
            },
            
            {
              id: '13',
              message: 'Your response have been recorded. Thanks you!',
              end: true
            }
          ]}
        />
        </ThemeProvider>
      </div>
    </div>
    
  );
}

export default Landing;
