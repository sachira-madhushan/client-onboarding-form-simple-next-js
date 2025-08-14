# Client Onboarding Form  

![Application GIF](https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg)  


A small client onboarding form built with **Next.js App Router**, **React Hook Form**, and **Zod** validation.  
The form validates user input, posts the data to an external API endpoint, and provides a smooth UX with inline errors, disabled submit during submission, and success/error feedback.

---

## 🚀 Tech Stack
- [Next.js](https://nextjs.org/) (App Router)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/) with `@hookform/resolvers/zod`
- [Axios](https://axios-http.com/) for HTTP requests
- [TailwindCSS](https://tailwindcss.com/)
- [React Datepicker](https://reactdatepicker.com/) for date input
- [React Toastify](https://fkhadra.github.io/react-toastify/) for notifications

---

## ✨ Features
- **Form Validation** with Zod
- Inline error messages
- Mobile responsive
- Persist values when validation errors occur
- API submission with Axios
- Success toast with submitted data summary
- Error notice on failed requests
- Environment variable for API endpoint (API Client) (`NEXT_PUBLIC_ONBOARD_URL`)

---

## 📋 Form Fields & Rules
| Field              | Type     | Validation Rules                                                                 |
|--------------------|----------|----------------------------------------------------------------------------------|
| Full name          | string   | Required, 2–80 chars, letters/spaces/`'`/`-` only                                |
| Email              | string   | Required, valid email                                                            |
| Company name       | string   | Required, 2–100 chars                                                            |
| Services           | array    | Required, choose ≥1 from: UI/UX, Branding, Web Dev, Mobile App                   |
| Budget (USD)       | number   | Optional, integer between 100 and 1,000,000                                      |
| Project start date | date     | Required, must be today or later                                                 |
| Accept terms       | boolean  | Required, must be checked                                                        |

---

## 🚀 Screenshots

Web View
![Application GIF]('https://raw.githubusercontent.com/sachira-madhushan/client-onboarding-form-simple-next-js/refs/heads/feature/client-onboarding-form/public/form_fields.png')  
![Application GIF]('https://raw.githubusercontent.com/sachira-madhushan/client-onboarding-form-simple-next-js/refs/heads/feature/client-onboarding-form/public/validations.png')  

Mobile View
![Application GIF]("https://raw.githubusercontent.com/sachira-madhushan/client-onboarding-form-simple-next-js/refs/heads/feature/client-onboarding-form/public/mobile_form_fields.png")  
![Application GIF]("https://raw.githubusercontent.com/sachira-madhushan/client-onboarding-form-simple-next-js/refs/heads/feature/client-onboarding-form/public/mobile_validations.png")  

Notifications
![Application GIF]("https://raw.githubusercontent.com/sachira-madhushan/client-onboarding-form-simple-next-js/refs/heads/feature/client-onboarding-form/public/success.PNG")  
![Application GIF]("https://raw.githubusercontent.com/sachira-madhushan/client-onboarding-form-simple-next-js/refs/heads/feature/client-onboarding-form/public/error.PNG")  

---
## 📦 Installation & Setup

Clone the repository:

```bash
git clone https://github.com/sachira-madhushan/client-onboarding-form-simple-next-js.git

cd client-onboarding-form-simple-next-js
```

Enviroment variables:

Use .env.example as template for the env file.

| NEXT_PUBLIC_BASE_URL | Base URL |
| NEXT_PUBLIC_ONBOARD_URL | Onboarding form endpoint |


Run locally:

```bash
npm install

npm run dev
```
