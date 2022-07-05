export interface VideoProps {
    lessonSlug: string,
  }
  
export interface GetLessonBySlugResponse {
      lesson:{
          title: string;
          videoId: string;
          description: string;
          teacher: {
              avatarURL: string;
              bio: string;
              name: string;
          }
      } 
  } 