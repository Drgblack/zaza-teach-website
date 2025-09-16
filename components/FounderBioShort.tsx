"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface FounderBioShortProps {
  showImage?: boolean;
  className?: string;
}

export default function FounderBioShort({ showImage = true, className = "" }: FounderBioShortProps) {
  return (
    <div className={`bg-white rounded-2xl p-6 shadow-lg ${className}`}>
      {showImage && (
        <div className="flex items-center space-x-4 mb-4">
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-r from-[#66B2B2] to-[#8A2BE2] rounded-full p-0.5">
              <div className="bg-white rounded-full p-0.5">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
                  alt="Dr. Greg Blackburn"
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-[#2C3E35]">Dr. Greg Blackburn</h3>
            <p className="text-sm text-[#66B2B2]">Founder & CEO, Zaza Technologies</p>
          </div>
        </div>
      )}
      
      <div className="text-sm text-[#2C3E35]/90 leading-relaxed space-y-3">
        <p>
          Dr. Greg Blackburn is the Founder & CEO of Zaza Technologies. His path started in Tasmania as a painter and decorator — and it was education that changed everything. Step by step, learning opened doors that led to a career in professional education and ultimately to the CLO role.
        </p>
        
        <p>
          Greg has trained thousands of people in business classrooms and worked alongside teachers, schools, and universities around the world. He holds a <strong>PhD in Professional Education from City, University of London</strong> and has published widely on how people think, learn, and solve problems. Teaching runs in the family — with a sister, aunty, uncle, cousins, and many close friends in the profession.
        </p>
        
        <p>
          Zaza Teach is Greg's promise to educators: tools built on sound pedagogy and deep empathy that give teachers back their time, creativity, and confidence — so they can do what they do best: just teach.
        </p>
      </div>
      
      <div className="mt-4 pt-4 border-t border-[#2C3E35]/10">
        <Link 
          href="/about-founder"
          className="text-[#66B2B2] hover:text-[#8A2BE2] font-medium text-sm transition-colors duration-200"
        >
          Read full story →
        </Link>
      </div>
    </div>
  );
}