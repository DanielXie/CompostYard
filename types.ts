
export interface TeamMember {
  name: string;
  nameEn: string;
  role: string;
  roleEn: string;
  bio: string;
  bioEn: string;
  image: string;
}

export interface Partner {
  name: string;
  nameEn: string;
  category: 'Automotive' | 'Film';
}
