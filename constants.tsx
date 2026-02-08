
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
    nameEn: "Huang Jianle",
    role: "创意总监 & AI叙事设计师",
    roleEn: "Creative Director & AI Narrative Designer",
    bio: "北京电影学院动画艺术本科，国际金奖导演。",
    bioEn: "BFA in Animation from Beijing Film Academy; International award-winning director.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "胡康康",
    nameEn: "Hu Kangkang",
    role: "艺术指导 & AI视觉设计师",
    roleEn: "Art Director & AI Visual Designer",
    bio: "北京电影学院摄影系故事片摄影本科，16年商业影像经验，参与过上百部商业广告，商业短片，公益纪录片等项目。",
    bioEn: "BFA in Narrative Cinematography from Beijing Film Academy. With 16 years of professional experience, he has contributed to hundreds of TVCs, commercial shorts, and public service documentaries.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "谢波",
    nameEn: "Xie Bo",
    role: "技术总监 & AI视觉技术总监",
    roleEn: "Technical Director & AI Visual Technical Director",
    bio: "20多年视效积淀，致力打造高品质视觉特效，广泛涉及电影、广告和纪录片等领域。",
    bioEn: "Over 20 years of VFX mastery, dedicated to creating high-end visual effects across feature films, commercial advertising, and documentary fields.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop"
  }
];

export const PROJECTS: Project[] = [
  // AIGC
  { 
    id: 'a1', 
    category: 'AIGC', 
    title: '暗黑悬疑短剧《污渍》', 
    titleEn: 'Dark Suspense Short: Stains', 
    image: './image/污渍.png', 
    link: 'https://www.bilibili.com/video/BV1nkqdBQE7L?buvid=ZF4B81FF5EBE4039463AA1801AB23319764C&from_spmid=search.search-result.0.0&is_story_h5=false&mid=fIgDBXnv05RniVOtKgzMXQ%3D%3D&plat_id=116&share_from=ugc&share_medium=iphone&share_plat=ios&share_session_id=A6C3BCB4-BE92-4E3B-8739-AEA307E197C0&share_source=COPY&share_tag=s_i&spmid=united.player-video-detail.0.0&timestamp=1770559563&unique_k=gzrznUn&up_id=3690984527366501'
  },
  { 
    id: 'a2', 
    category: 'AIGC', 
    title: '影视级AI重现《Spoliarium》', 
    titleEn: 'Cinematic AI: Spoliarium', 
    image: './image/Spoliarium.png', 
    link: 'http://xhslink.com/o/2bgCv2NINFQ'
  },
  { 
    id: 'a3', 
    category: 'AIGC', 
    title: 'X数字人代言广告', 
    titleEn: 'X Digital Avatar Brand Film', 
    image: './image/X数字人代言广告.png', 
    link: '#'
  },
  { 
    id: 'a4', 
    category: 'AIGC', 
    title: 'X药品广告', 
    titleEn: 'X Pharmaceutical Commercial', 
    image: './image/X药品广告.png', 
    link: '#'
  },
  // TVC
  { id: 't1', category: 'TVC', title: '闯过界-雷克萨斯', titleEn: 'Crossing Borders - Lexus', image: './image/闯过界-雷克萨斯.png' },
  { id: 't2', category: 'TVC', title: '新东方烹饪学校', titleEn: 'New Oriental Culinary School', image: './image/新东方烹饪学校.png' },
  { id: 't3', category: 'TVC', title: '滴滴', titleEn: 'DiDi Chuxing', image: './image/滴滴.png' },
  { id: 't4', category: 'TVC', title: '赖沙', titleEn: 'Laisha', image: './image/赖沙.png' },
  // Promotional
  { id: 'p1', category: 'Promotional', title: '北京首都机场微电影', titleEn: 'Capital Airport Micro-film', image: './image/北京首都机场微电影.png' },
  { id: 'p2', category: 'Promotional', title: '中国人保PICC', titleEn: 'PICC Brand Film', image: './image/中国人保PICC.png' },
  { id: 'p3', category: 'Promotional', title: '中地海外', titleEn: 'CGCOC Group', image: './image/中地海外.png' },
  { id: 'p4', category: 'Promotional', title: '玉溪庄园', titleEn: 'Yuxi Manor', image: './image/玉溪庄园.png' },
  // VFX
  { id: 'v1', category: 'VFX', title: '姜文首部动画短片', titleEn: 'Jiang Wen\'s First Animated Short Film', image: './image/姜文首部动画短片.png' },
  { id: 'v2', category: 'VFX', title: '警察故事', titleEn: 'Police Story 2013', image: './image/警察故事.png' },
  { id: 'v3', category: 'VFX', title: '狄仁杰之神都龙王', titleEn: 'Young Detective Dee', image: './image/狄仁杰之神都龙王.png' },
  { id: 'v4', category: 'VFX', title: '黄金时代', titleEn: 'The Golden Era', image: './image/黄金时代.png' },
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
