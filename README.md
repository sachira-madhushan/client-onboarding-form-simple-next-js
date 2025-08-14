# Client Onboarding Form  

![Next.js Logo](https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg)  
![React Hook Form](https://react-hook-form.com/images/logo/react-hook-form-logo-only.png)  
![Zod Logo](https://zod.dev/logo.svg)  

A small client onboarding form built with **Next.js App Router**, **React Hook Form**, and **Zod** validation.  
The form validates user input, posts the data to an external API endpoint, and provides a smooth UX with inline errors, disabled submit during submission, and success/error feedback.

---

## 🚀 Tech Stack
- [Next.js](https://nextjs.org/) (App Router)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/) with `@hookform/resolvers/zod`
- [Axios](https://axios-http.com/) for HTTP requests
- [TailwindCSS](https://tailwindcss.com/) (or any CSS solution)
- [React Datepicker](https://reactdatepicker.com/) for date input
- [React Toastify](https://fkhadra.github.io/react-toastify/) for notifications

---

## ✨ Features
- **Form Validation** with Zod
- Inline error messages
- Disable submit button while submitting
- Persist values when validation errors occur
- API submission with Axios
- Success toast with submitted data summary
- Error notice on failed requests
- Environment variable for API endpoint (`NEXT_PUBLIC_ONBOARD_URL`)

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

## 📦 Installation & Setup

Clone the repository:

```bash
git clone https://github.com/your-username/onboarding-form.git
cd onboarding-form
