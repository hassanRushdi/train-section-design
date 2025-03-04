import { Hourglass, FileText, Calendar, PlaySquare } from "lucide-react";
import cardPhoto from "../assets/card-photo.jpg";

const CourseCard = () => {
  return (
    <div className="max-w-max bg-white rounded-xl shadow-lg border p-3">
      {/* Image Section */}
      <div className="overflow-hidden">
        <img
          src={cardPhoto}
          alt="Course preview"
          className="w-full h-[290px] object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="px-4 py-10">
        <div className="space-y-6 text-[#605C5C] text-sm font-light">
          {/* Hours */}
          <div className="flex items-center gap-5">
            <Hourglass className="text-secondary" size={18} />
            <span className="font-medium">90 Hours</span>
          </div>

          {/* Modules */}
          <div className="flex items-center gap-5">
            <FileText className="text-secondary" size={18} />
            <span className="font-medium">17 Modules</span>
          </div>

          {/* Duration */}
          <div className="flex items-center gap-5">
            <Calendar className="text-secondary" size={18} />
            <span className="font-medium">3 Months</span>
          </div>

          {/* Sessions */}
          <div className="flex items-center gap-5">
            <PlaySquare className="text-secondary" size={18} />
            <span className="font-medium">20 Sessions</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
