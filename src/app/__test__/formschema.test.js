import { describe, it, expect } from "vitest";
import { formSchema } from "../schemas/ClientOnboardingFormValidation";

describe("Client Onboarding Form Schema", () => {

  it("should pass with valid data", () => {
    const result = formSchema.safeParse({
      fullName: "Ada Lovelace",
      email: "ada@example.com",
      company: "Analytical Engines Ltd",
      services: ["UI/UX", "Web Dev"],
      budget: 50000,
      startDate: new Date().toISOString().split("T")[0],
      acceptTerms: true,
    });

    expect(result.success).toBe(true);
  });

  it("should fail for invalid fullName (too short)", () => {
    const result = formSchema.safeParse({
      fullName: "A",
      email: "ada@example.com",
      company: "Analytical Engines Ltd",
      services: ["UI/UX"],
      budget:150,
      startDate: new Date().toISOString().split("T")[0],
      acceptTerms: true,
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toContain("at least 2 characters");
    }
  });

  it("should fail for invalid fullName characters", () => {
    const result = formSchema.safeParse({
      fullName: "Ada123",
      email: "ada@example.com",
      company: "Analytical Engines Ltd",
      services: ["UI/UX"],
      budget:150,
      startDate: new Date().toISOString().split("T")[0],
      acceptTerms: true,
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toContain("Only letters, spaces");
    }
  });

  it("should fail for invalid email", () => {
    const result = formSchema.safeParse({
      fullName: "Ada Lovelace",
      email: "invalid-email",
      company: "Analytical Engines Ltd",
      budget:150,
      services: ["UI/UX"],
      startDate: new Date().toISOString().split("T")[0],
      acceptTerms: true,
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toContain("Invalid email address");
    }
  });

  it("should fail if no services selected", () => {
    const result = formSchema.safeParse({
      fullName: "Ada Lovelace",
      email: "ada@example.com",
      company: "Analytical Engines Ltd",
      budget:150,
      services: [],
      startDate: new Date().toISOString().split("T")[0],
      acceptTerms: true,
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toContain("Select at least one service");
    }
  });

  it("should fail if budget is less than 100", () => {
    const result = formSchema.safeParse({
      fullName: "Ada Lovelace",
      email: "ada@example.com",
      company: "Analytical Engines Ltd",
      services: ["UI/UX"],
      budget: 50,
      startDate: new Date().toISOString().split("T")[0],
      acceptTerms: true,
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toContain("at least $100");
    }
  });

  it("should fail if startDate is in the past", () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const result = formSchema.safeParse({
      fullName: "Ada Lovelace",
      email: "ada@example.com",
      company: "Analytical Engines Ltd",
      budget:150,
      services: ["UI/UX"],
      startDate: yesterday.toISOString().split("T")[0],
      acceptTerms: true,
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toContain("Project start date must be today or later");
    }
  });

  it("should fail if acceptTerms is false", () => {
    const result = formSchema.safeParse({
      fullName: "Ada Lovelace",
      email: "ada@example.com",
      company: "Analytical Engines Ltd",
      budget:150,
      services: ["UI/UX"],
      startDate: new Date().toISOString().split("T")[0],
      acceptTerms: false,
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toContain("You must accept the terms");
    }
  });

});