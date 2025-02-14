"use client"


interface ImageComponentProps {
  src: string;
  alt: string;
}

export const ImageComponent = ({ src, alt }: ImageComponentProps) => {
  return (
    <div className="relative">
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  );
};

export const images = {
  // Main images
  dashboard: "/images/dashboard.png",
  aiAnswers: "/images/ai-answers.png",
  inbox: "/images/inbox.png",
  proactive: "/images/proactive.png",
  chatinterface: "/images/chatinterface.png",
  meeting: "/images/meeting.png",
  
  // Feature images
  feature1: "/images/feature1.png",
  feature2: "/images/feature2.png",
  feature3: "/images/feature3.png",
  
  // Pricing section images
  linear: "/images/linear.png",
  fireship: "/images/fireship.png",
  gallery: {
    image1: "/images/image1.jpg",
    image2: "/images/image2.jpg",
    image3: "/images/image3.jpg",
    image4: "/images/image4.jpg",
    image5: "/images/image5.jpg",
    image6: "/images/image6.jpg"
  },

  // Video thumbnails
  video1: "/images/video1.png",
  video2: "/images/video2.png",
  video3: "/images/video3.png",

  // Icons and logos
  logo: "/images/logo.png",
  icon1: "/images/icon1.png",
  icon2: "/images/icon2.png",
  icon3: "/images/icon3.png"
};