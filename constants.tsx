
import { TeamMember, Partner } from './types';

export interface Project {
  id: string;
  title: string;
  titleEn: string;
  category: 'AIGC' | 'TVC' | 'Promotional' | 'VFX';
  image: string;
  link?: string;
}

export const TEAM: TeamMember[] = [
  {
    name: "黄建乐",
    nameEn: "Ale Huang",
    role: "创意总监 & AI叙事设计师",
    roleEn: "Creative Director & AI Narrative Designer",
    bio: "北京电影学院动画艺术本科，国际金奖导演。",
    bioEn: "BFA in Animation from Beijing Film Academy; International award-winning director.",
    image: "https://github.com/DanielXie/CompostYard/blob/main/image/Ale%20Huang.jpg?raw=true"
  },
  {
    name: "胡康康",
    nameEn: "Mikio Hu",
    role: "艺术指导 & AI视觉设计师",
    roleEn: "Art Director & AI Visual Designer",
    bio: "北京电影学院摄影系故事片摄影本科，16年商业影像经验，参与过上百部商业广告，商业短片，公益纪录片等项目。",
    bioEn: "BFA in Narrative Cinematography from Beijing Film Academy. With 16 years of professional experience, he has contributed to hundreds of TVCs, commercial shorts, and public service documentaries.",
    image: "https://github.com/DanielXie/CompostYard/blob/main/image/Mikio%20Hu.jpg?raw=true"
  },
  {
    name: "谢波",
    nameEn: "Daniel Xie",
    role: "技术总监 & AI视觉技术总监",
    roleEn: "Technical Director & AI Visual Technical Director",
    bio: "20多年视效积淀，致力打造高品质视觉特效，广泛涉及电影、广告和纪录片等领域。",
    bioEn: "Over 20 years of VFX mastery, dedicated to creating high-end visual effects across feature films, commercial advertising, and documentary fields.",
    image: "https://github.com/DanielXie/CompostYard/blob/main/image/Daniel%20Xie.jpg?raw=true"
  }
];

export const PROJECTS: Project[] = [
  // AIGC
  { 
    id: 'a1', 
    category: 'AIGC', 
    title: '暗黑悬疑短剧《污渍》', 
    titleEn: 'Dark Suspense Short: Stains', 
    image: 'https://github.com/DanielXie/CompostYard/blob/main/image/%E6%B1%A1%E6%B8%8D.jpg?raw=true', 
    link: 'https://www.bilibili.com/video/BV1nkqdBQE7L?buvid=ZF4B81FF5EBE4039463AA1801AB23319764C&from_spmid=search.search-result.0.0&is_story_h5=false&mid=fIgDBXnv05RniVOtKgzMXQ%3D%3D&plat_id=116&share_from=ugc&share_medium=iphone&share_plat=ios&share_session_id=A6C3BCB4-BE92-4E3B-8739-AEA307E197C0&share_source=COPY&share_tag=s_i&spmid=united.player-video-detail.0.0&timestamp=1770559563&unique_k=gzrznUn&up_id=3690984527366501'
  },
  { 
    id: 'a2', 
    category: 'AIGC', 
    title: '影视级AI重现《Spoliarium》', 
    titleEn: 'Cinematic AI: Spoliarium', 
    image: 'https://github.com/DanielXie/CompostYard/blob/main/image/Spoliarium.jpg?raw=true', 
    link: 'http://xhslink.com/o/2bgCv2NINFQ'
  },
  { 
    id: 'a3', 
    category: 'AIGC', 
    title: 'X数字人代言广告', 
    titleEn: 'X Digital Avatar Brand Film', 
    image: 'https://github.com/DanielXie/CompostYard/blob/main/image/X%E6%95%B0%E5%AD%97%E4%BA%BA%E4%BB%A3%E8%A8%80%E5%B9%BF%E5%91%8A.jpg?raw=true', 
    link: '#'
  },
  { 
    id: 'a4', 
    category: 'AIGC', 
    title: 'X药品广告', 
    titleEn: 'X Pharmaceutical Commercial', 
    image: 'https://github.com/DanielXie/CompostYard/blob/main/image/X%E8%8D%AF%E5%93%81%E5%B9%BF%E5%91%8A.jpg?raw=true', 
    link: '#'
  },
  // TVC
  { id: 't1', category: 'TVC', title: '闯过界-雷克萨斯', titleEn: 'Crossing Borders - Lexus', image: 'https://github.com/DanielXie/CompostYard/blob/main/image/%E9%97%AF%E8%BF%87%E7%95%8C-%E9%9B%B7%E5%85%8B%E8%90%A8%E6%96%AF.jpg?raw=true' },
  { id: 't2', category: 'TVC', title: '新东方烹饪学校', titleEn: 'New Oriental Culinary School', image: 'https://github.com/DanielXie/CompostYard/blob/main/image/%E6%96%B0%E4%B8%9C%E6%96%B9%E7%83%B9%E9%A5%AA%E5%AD%A6%E6%A0%A1.jpg?raw=true' },
  { id: 't3', category: 'TVC', title: '滴滴', titleEn: 'DiDi Chuxing', image: 'https://github.com/DanielXie/CompostYard/blob/main/image/%E6%BB%B4%E6%BB%B4.jpg?raw=true' },
  { id: 't4', category: 'TVC', title: '赖沙', titleEn: 'Laisha', image: 'https://github.com/DanielXie/CompostYard/blob/main/image/%E8%B5%96%E6%B2%99.jpg?raw=true' },
  // Promotional
  { id: 'p1', category: 'Promotional', title: '北京首都机场微电影', titleEn: 'Capital Airport Micro-film', image: 'https://github.com/DanielXie/CompostYard/blob/main/image/%E5%8C%97%E4%BA%AC%E9%A6%96%E9%83%BD%E6%9C%BA%E5%9C%BA%E5%BE%AE%E7%94%B5%E5%BD%B1.jpg?raw=true' },
  { id: 'p2', category: 'Promotional', title: '中国人保PICC', titleEn: 'PICC Brand Film', image: 'https://github.com/DanielXie/CompostYard/blob/main/image/%E4%B8%AD%E5%9B%BD%E4%BA%BA%E4%BF%9DPICC.jpg?raw=true' },
  { id: 'p3', category: 'Promotional', title: '中地海外', titleEn: 'CGCOC Group', image: 'https://github.com/DanielXie/CompostYard/blob/main/image/%E4%B8%AD%E5%9C%B0%E6%B5%B7%E5%A4%96.jpg?raw=true' },
  { id: 'p4', category: 'Promotional', title: '玉溪庄园', titleEn: 'Yuxi Manor', image: 'https://github.com/DanielXie/CompostYard/blob/main/image/%E7%8E%89%E6%BA%AA%E5%BA%84%E5%9B%AD.jpg?raw=true' },
  // VFX
  { id: 'v1', category: 'VFX', title: '姜文首部动画短片', titleEn: 'Jiang Wen\'s First Animated Short Film', image: 'https://github.com/DanielXie/CompostYard/blob/main/image/%E5%A7%9C%E6%96%87%E9%A6%96%E9%83%A8%E5%8A%A8%E7%94%BB%E7%9F%AD%E7%89%87.jpg?raw=true' },
  { id: 'v2', category: 'VFX', title: '警察故事', titleEn: 'Police Story 2013', image: 'https://github.com/DanielXie/CompostYard/blob/main/image/%E8%AD%A6%E5%AF%9F%E6%95%85%E4%BA%8B.jpg?raw=true' },
  { id: 'v3', category: 'VFX', title: '狄仁杰之神都龙王', titleEn: 'Young Detective Dee', image: 'https://github.com/DanielXie/CompostYard/blob/main/image/%E7%8B%84%E4%BB%81%E6%9D%B0%E4%B9%8B%E7%A5%9E%E9%83%BD%E9%BE%99%E7%8E%8B.jpg?raw=true' },
  { id: 'v4', category: 'VFX', title: '黄金时代', titleEn: 'The Golden Era', image: 'https://github.com/DanielXie/CompostYard/blob/main/image/%E9%BB%84%E9%87%91%E6%97%B6%E4%BB%A3.jpg?raw=true' },
];

export const PARTNERS: Partner[] = [
  { name: "雷克萨斯", nameEn: "Lexus", category: 'Automotive' },
  { name: "长城汽车", nameEn: "GWM", category: 'Automotive' },
  { name: "MINI", nameEn: "MINI", category: 'Automotive' },
  { name: "大众汽车", nameEn: "Volkswagen", category: 'Automotive' }
];

export const FILMS: string[] = [
  "《圆明园》 (The Old Summer Palace)",
  "《狄仁杰之神都龙王》 (Detective Dee)",
  "《警察故事2013》 (Police Story 2013)"
];
