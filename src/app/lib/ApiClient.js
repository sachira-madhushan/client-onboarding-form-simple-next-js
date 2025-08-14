import axios from "axios";

//API base client that can be used to send requests to the base URL
const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
})

//Post client onboarding form data to the backend
export const postClientOnboardingFormData = async (data) => {

    const requestBody = {
        fullName: data.fullName,
        email: data.email,
        companyName: data.company,
        services: data.services,
        budget: data.budget,
        startDate: data.startDate,
        acceptTerms: data.acceptTerms
    }

    try {
        const response = await apiClient.post(process.env.NEXT_PUBLIC_ONBOARD_URL, requestBody);
        return response.data;
    } catch (error) {
        console.error("Error submitting onboarding form:", error);
        throw error;
    }
}