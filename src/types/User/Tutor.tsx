export interface TutorData {
    name: string;
    rating: number;
    reviews: number;
    imageUrl: string;
    bio: string;
    subjects: string[];
    experiences: Experience[];
    reviewCounts: Record<string, number>;
  }

  export interface Experience {
    company: string;
    period: string;
    position: string;
  }