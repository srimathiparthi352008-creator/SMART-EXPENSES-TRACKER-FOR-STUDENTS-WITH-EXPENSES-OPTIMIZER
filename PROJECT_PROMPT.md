COMPLETE PROJECT PROMPT

Project Title

Student Financial Guardian – Smart Expense Tracker with Expense Optimizer

---

1. Project Overview

Build a professional, modern, mobile-first web application called Student Financial Guardian.

The application is a Smart Expense Tracker specially designed for college students.

Its purpose is to help students:

- Track daily expenses.
- Manage monthly pocket money or budget.
- Understand spending patterns.
- Calculate their remaining balance.
- Calculate a safe daily spending limit.
- Identify unnecessary spending.
- Optimize expenses.
- Set saving goals.
- Receive personalized financial guidance.

The application should not be just a basic expense recorder. It should act as a Student Financial Guardian that helps students make better financial decisions.

---

2. Development Requirement

The entire project must be possible to develop using:

📱 Smartphone + GitHub

The developer should not need a laptop or desktop.

The project must be a static client-side web application that can be hosted using GitHub Pages.

Do NOT require:

- Python
- Flask
- Node.js
- PHP
- MySQL
- XAMPP
- Firebase
- Any backend server
- Any local server

The first version must work directly in a mobile browser.

---

3. Technology Stack

Frontend

HTML5

Used to create:

- Application structure
- Forms
- Buttons
- Navigation
- Tables
- Dashboard sections

CSS3

Used for:

- Modern UI design
- Responsive layout
- Mobile-first design
- Cards
- Buttons
- Forms
- Navigation
- Animations

Vanilla JavaScript

Used for:

- Expense management
- Budget calculations
- Daily spending calculations
- Expense Optimizer
- Student Financial Guardian
- Financial Health Score
- Saving goals
- Search and filtering
- LocalStorage
- Dynamic dashboard updates

Do not use React, Angular, Vue, or other frontend frameworks.

---

Data Storage

Browser LocalStorage

Use LocalStorage to store:

- Student profile
- Monthly budget
- Expenses
- Categories
- Saving goals
- Application settings

The application must preserve the data after the browser is closed and reopened.

No external database is required for Version 1.

---

Data Visualization

Chart.js

Use Chart.js to display:

- Category-wise expense chart
- Monthly spending chart
- Budget usage chart

Load Chart.js using a CDN.

Charts must be responsive and work properly on mobile screens.

---

Development and Hosting

GitHub

Use GitHub to:

- Create the repository
- Store project files
- Edit code
- Track project changes

GitHub Pages

Use GitHub Pages to:

- Host the website
- Publish the application
- Access the application through a web browser

---

4. Project Architecture

Use a simple client-side architecture:

HTML → CSS → JavaScript → LocalStorage

Optional:

JavaScript → Chart.js

No backend is required in Version 1.

---

5. File Structure

Keep the project beginner-friendly.

student-financial-guardian/
│
├── index.html
├── style.css
├── script.js
└── README.md

Do not create unnecessary files.

---

6. Welcome Page

Create a professional landing page.

Display:

Student Financial Guardian

Subtitle:

Smart Expense Tracker for Students

Description:

"Track your expenses, manage your budget, optimize your spending, and build better financial habits."

Buttons:

- Get Started
- Login

The design must be mobile-friendly.

---

7. Student Profile

Create a simple student profile.

Allow the user to enter:

- Name
- Monthly pocket money
- Monthly budget

Store this information using LocalStorage.

Do not implement real server-based authentication in Version 1.

---

8. Dashboard

Create a main dashboard containing attractive summary cards.

Display:

Monthly Budget

Example:

₹6000

Total Expenses

₹3500

Remaining Balance

₹2500

Today's Spending

₹150

Daily Spending Limit

₹125

Update all values automatically whenever expenses are added, edited, or deleted.

---

9. Expense Management

Create an Add Expense form.

Fields:

- Expense Name
- Amount
- Category
- Date
- Optional Note

Categories:

- Food
- Travel
- Hostel
- Books & Stationery
- Education
- Shopping
- Entertainment
- Medical
- Other

Buttons:

- Add Expense
- Clear

Validate all inputs.

Do not allow:

- Empty expense name
- Negative amount
- Zero amount
- Invalid date

Save all expenses in LocalStorage.

---

10. Expense History

Create an expense history section.

Each expense should display:

- Expense name
- Amount
- Category
- Date
- Note

Provide:

- Edit
- Delete
- Search
- Category filter
- Date filter

Make this section easy to use on a mobile screen.

---

11. Budget Management

Allow students to set or update their monthly budget.

Calculate:

Remaining Balance = Monthly Budget − Total Expenses

Calculate:

Daily Spending Limit = Remaining Balance ÷ Remaining Days

The calculation should automatically update when:

- A new expense is added.
- An expense is deleted.
- An expense is edited.
- The budget changes.
- The month changes.

Handle zero and negative values safely.

---

12. Student Financial Guardian

Create a separate module called:

Student Financial Guardian

This module continuously analyzes the student's spending.

It should provide financial status such as:

🟢 Safe

"You are managing your budget well."

🟡 Warning

"You have used 80% of your monthly budget."

🔴 Critical

"Your current spending rate may cause you to run out of money before the end of the month."

The system should automatically generate these messages based on actual expense data.

---

13. Expense Optimizer

This is one of the main features of the application.

Create an Expense Optimizer that analyzes spending patterns and provides practical suggestions.

The first version should use rule-based logic, not advanced AI.

Examples:

Food

If food expenses are unusually high:

"Your food expenses are high this month. Consider reducing unnecessary outside food."

Shopping

If shopping expenses increase:

"Your shopping expenses are increasing. Consider setting a fixed shopping limit."

Entertainment

If entertainment spending is high:

"Your entertainment spending is above your planned level. Consider reducing unnecessary expenses."

High Spending Rate

If the student is spending too quickly:

"Your current spending rate is higher than your recommended daily limit."

Good Spending

If spending is under control:

"Great! Your current spending is within your planned budget."

Suggestions should be generated automatically based on the user's actual data.

---

14. Financial Health Score

Create a Financial Health Score from 0–100.

The score should consider:

- Percentage of budget used
- Remaining balance
- Daily spending
- Savings
- Unnecessary spending

Example:

Financial Health Score: 82/100

Message:

"Good financial management!"

Use a simple, understandable JavaScript formula.

Clearly comment the scoring logic in the code.

---

15. Future Money Prediction

Create a basic prediction feature using the student's current spending rate.

Estimate:

- Expected total spending by the end of the month.
- Whether the student is likely to exceed the budget.
- Approximate remaining money.

Example:

«"Based on your current spending rate, you may exceed your monthly budget by ₹700."»

Or:

«"At your current spending rate, you are likely to stay within your budget."»

This does not need machine learning in Version 1.

Use simple calculations based on:

- Total spending
- Days elapsed
- Days remaining
- Current budget

---

16. Saving Goal

Allow the student to create a savings goal.

Example:

Goal: Buy a programming course

Target: ₹3000

Current Savings: ₹1200

Display:

- Progress bar
- Amount remaining
- Percentage completed

Example:

40% completed

Allow the user to update the saved amount.

---

17. Spending Analysis

Create a dedicated analysis section.

Display:

Category-wise spending

Example:

Food — ₹2000
Travel — ₹800
Shopping — ₹500
Entertainment — ₹200

Monthly spending trend

Display spending over different dates or weeks.

Use responsive Chart.js charts.

---

18. Budget Alerts

Display alerts when:

50% budget used

Provide a normal status message.

80% budget used

Show a warning.

100% budget used

Show a critical alert.

Also alert the user when their daily spending exceeds the recommended daily limit.

---

19. Student-Specific Categories

The application should focus on common student expenses:

- Hostel
- Food
- Travel
- Books
- Stationery
- College Projects
- Education
- Entertainment
- Shopping
- Medical
- Other

This makes the application specifically useful for students rather than being a general finance tracker.

---

20. Mobile-First UI

This is extremely important.

The application will be developed and tested using a smartphone.

Therefore:

- Use responsive CSS.
- Use large touch-friendly buttons.
- Use readable font sizes.
- Avoid horizontal scrolling.
- Use mobile-friendly forms.
- Use cards for important information.
- Make navigation easy on small screens.
- Make charts responsive.
- Ensure all buttons work properly on touch devices.

The application should also work on tablets and desktop browsers.

---

21. Design Requirements

Create a clean and professional student-friendly interface.

Use:

- Dashboard cards
- Navigation menu
- Clear buttons
- Expense cards
- Progress bars
- Charts
- Alert messages
- Consistent spacing
- Simple icons where appropriate

Do not make the interface unnecessarily complicated.

---

22. LocalStorage Structure

Use JavaScript LocalStorage to store data.

Example data categories:

studentProfile
monthlyBudget
expenses
savingGoals

Expenses should contain:

id
name
amount
category
date
note

Use JSON for storing arrays and objects.

---

23. Data Validation

The application must:

- Reject empty values.
- Reject negative amounts.
- Reject zero amounts.
- Validate dates.
- Handle missing LocalStorage data.
- Handle empty expense lists.
- Handle zero budget.
- Prevent calculation errors.
- Confirm before deleting an expense.

---

24. Error Handling

Display friendly messages.

Examples:

"Please enter an expense amount."

"Please select a category."

"Your budget cannot be negative."

"No expenses found."

"Your expense has been successfully added."

Avoid displaying technical JavaScript errors to the user.

---

25. Privacy

Since this version uses LocalStorage:

- Do not send financial data to an external server.
- Do not collect unnecessary personal information.
- Clearly mention that expense data is stored locally in the browser.

---

26. English Language

The first version should use clear and professional English.

Do not implement multilingual support in Version 1.

Keep multilingual support as a future enhancement.

---

27. Future Enhancements

Do not implement these now.

Mention them in the README as future work:

- Tamil and other regional language support
- Voice-based expense entry
- AI-powered financial assistant
- Advanced AI expense prediction
- Receipt scanning using OCR
- Cloud synchronization
- Mobile Android application
- Secure cloud database
- Parent/guardian reporting
- Automatic payment notification analysis

---

28. GitHub README

Create a professional "README.md".

It should contain:

Project Title

Student Financial Guardian

Description

Explain the purpose of the project.

Problem Statement

Explain the financial management problems faced by students.

Proposed Solution

Explain how the application solves those problems.

Features

List all implemented features.

Technology Stack

Mention:

- HTML5
- CSS3
- Vanilla JavaScript
- LocalStorage
- Chart.js
- GitHub
- GitHub Pages

Project Structure

Explain each file.

How to Run

Explain how to open the application.

How to Deploy

Explain how to enable GitHub Pages.

Future Enhancements

List planned future features.

---

29. Code Requirements

The code must be:

- Beginner-friendly
- Clean
- Well organized
- Properly commented
- Responsive
- Easy to edit from a smartphone
- Free from unnecessary dependencies

Use meaningful variable and function names.

Avoid complicated programming techniques unless necessary.

---

30. Important Development Instruction

Do NOT generate the entire application as one unexplained block.

Generate the project file by file:

File 1

"index.html"

File 2

"style.css"

File 3

"script.js"

File 4

"README.md"

Make sure the files are compatible with each other.

After generating each file, explain briefly:

- What the file does.
- Where to create it in GitHub.
- How it connects to the other files.

---

31. Final Requirement

The final application must be a working:

Student Financial Guardian – Smart Expense Tracker with Expense Optimizer

It must:

- Work on a smartphone.
- Be hosted on GitHub Pages.
- Require no backend.
- Store data using LocalStorage.
- Track expenses.
- Manage budgets.
- Calculate daily spending limits.
- Analyze spending.
- Optimize expenses.
- Predict possible budget problems.
- Provide financial guidance.
- Display charts.
- Support saving goals.
- Have a professional mobile-friendly interface.

Build Version 1 using only technologies that a beginner can understand and maintain from a smartphone.
