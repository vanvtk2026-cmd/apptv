
import { CategoryType, WordItem, Question, WeeklyLesson } from './types';

export const VOCABULARY: Record<CategoryType, WordItem[]> = {
  [CategoryType.NOUN]: [
    { word: 'Trường học', example: 'Nơi em học tập hàng ngày.', sentence: 'Ngôi trường của em rất khang trang.', imageUrl: 'https://picsum.photos/seed/school/200/200' },
    { word: 'Thầy giáo', example: 'Người dạy dỗ chúng em.', sentence: 'Thầy giáo đang giảng bài say sưa.', imageUrl: 'https://picsum.photos/seed/teacher/200/200' },
    { word: 'Bút chì', example: 'Dùng để viết và vẽ.', sentence: 'Chiếc bút chì của em có màu vàng.', imageUrl: 'https://picsum.photos/seed/pencil/200/200' },
    { word: 'Con mèo', example: 'Vật nuôi hiền lành, bắt chuột.', sentence: 'Con mèo đang nằm sưởi nắng.', imageUrl: 'https://picsum.photos/seed/cat/200/200' },
    { word: 'Sách giáo khoa', example: 'Cuốn sách chứa kiến thức.', sentence: 'Sách giáo khoa giúp em học tốt.', imageUrl: 'https://picsum.photos/seed/book/200/200' },
    { word: 'Mặt trời', example: 'Chiếu sáng trái đất.', sentence: 'Mặt trời mọc ở hướng Đông.', imageUrl: 'https://picsum.photos/seed/sun/200/200' },
    { word: 'Bông hoa', example: 'Đẹp và có mùi thơm.', sentence: 'Bông hoa hồng nở rộ trong vườn.', imageUrl: 'https://picsum.photos/seed/flower/200/200' },
    { word: 'Bác sĩ', example: 'Người chữa bệnh cho mọi người.', sentence: 'Bác sĩ đang khám bệnh cho bé.', imageUrl: 'https://picsum.photos/seed/doctor/200/200' },
    { word: 'Cái bàn', example: 'Để đặt sách vở khi học.', sentence: 'Cái bàn học của em rất ngăn nắp.', imageUrl: 'https://picsum.photos/seed/table/200/200' },
    { word: 'Dòng sông', example: 'Nơi nước chảy hiền hòa.', sentence: 'Dòng sông quê em xanh biếc.', imageUrl: 'https://picsum.photos/seed/river/200/200' },
    { word: 'Quả táo', example: 'Loại trái cây thơm ngon.', sentence: 'Quả táo chín đỏ trên cành.', imageUrl: 'https://picsum.photos/seed/apple/200/200' },
    { word: 'Chiếc lá', example: 'Bộ phận của cây.', sentence: 'Chiếc lá xanh đung đưa trong gió.', imageUrl: 'https://picsum.photos/seed/leaf/200/200' },
  ],
  [CategoryType.VERB]: [
    { word: 'Đọc sách', example: 'Hành động tìm hiểu kiến thức qua chữ.', sentence: 'Lan rất thích đọc sách vào cuối tuần.', imageUrl: 'https://picsum.photos/seed/read/200/200' },
    { word: 'Quét nhà', example: 'Làm sạch sàn nhà.', sentence: 'Em giúp mẹ quét nhà mỗi ngày.', imageUrl: 'https://picsum.photos/seed/sweep/200/200' },
    { word: 'Chạy bộ', example: 'Vận động chân nhanh.', sentence: 'Bố em thường chạy bộ buổi sáng.', imageUrl: 'https://picsum.photos/seed/run/200/200' },
    { word: 'Hát', example: 'Phát ra âm thanh giai điệu.', sentence: 'Cả lớp cùng hát vang bài ca.', imageUrl: 'https://picsum.photos/seed/sing/200/200' },
    { word: 'Múa', example: 'Chuyển động cơ thể dẻo dai.', sentence: 'Các bạn gái đang biểu diễn múa.', imageUrl: 'https://picsum.photos/seed/dance/200/200' },
    { word: 'Viết bài', example: 'Ghi lại kiến thức lên giấy.', sentence: 'Nam đang cặm cụi viết bài.', imageUrl: 'https://picsum.photos/seed/write/200/200' },
    { word: 'Tưới cây', example: 'Cung cấp nước cho cây.', sentence: 'Ông em đang tưới cây ngoài vườn.', imageUrl: 'https://picsum.photos/seed/water/200/200' },
    { word: 'Bơi lội', example: 'Vận động dưới nước.', sentence: 'Em học bơi lội vào mùa hè.', imageUrl: 'https://picsum.photos/seed/swim/200/200' },
    { word: 'Nấu ăn', example: 'Chế biến thực phẩm.', sentence: 'Mẹ đang nấu ăn trong bếp.', imageUrl: 'https://picsum.photos/seed/cook/200/200' },
    { word: 'Học bài', example: 'Ôn tập kiến thức.', sentence: 'Em luôn học bài trước khi đi ngủ.', imageUrl: 'https://picsum.photos/seed/study/200/200' },
    { word: 'Đi bộ', example: 'Di chuyển bằng chân.', sentence: 'Chúng em cùng đi bộ tới trường.', imageUrl: 'https://picsum.photos/seed/walk/200/200' },
    { word: 'Vẽ tranh', example: 'Tạo ra hình ảnh bằng màu.', sentence: 'Bé đang vẽ tranh tặng bà.', imageUrl: 'https://picsum.photos/seed/paint/200/200' },
  ],
  [CategoryType.ADJECTIVE]: [
    { word: 'Xinh xắn', example: 'Đẹp một cách nhỏ nhắn.', sentence: 'Em bé có khuôn mặt rất xinh xắn.', imageUrl: 'https://picsum.photos/seed/cute/200/200' },
    { word: 'Thông minh', example: 'Có khả năng tư duy tốt.', sentence: 'Anh trai em rất thông minh.', imageUrl: 'https://picsum.photos/seed/smart/200/200' },
    { word: 'Chăm chỉ', example: 'Luôn cố gắng làm việc.', sentence: 'Bạn Lan rất chăm chỉ học tập.', imageUrl: 'https://picsum.photos/seed/diligent/200/200' },
    { word: 'Ngoan ngoãn', example: 'Biết nghe lời người lớn.', sentence: 'Chúng em luôn ngoan ngoãn nghe lời cô.', imageUrl: 'https://picsum.photos/seed/good/200/200' },
    { word: 'Hiền lành', example: 'Tính cách nhẹ nhàng.', sentence: 'Cô giáo em rất hiền lành.', imageUrl: 'https://picsum.photos/seed/kind/200/200' },
    { word: 'Xanh ngắt', example: 'Màu xanh đậm và đều.', sentence: 'Bầu trời mùa hè xanh ngắt.', imageUrl: 'https://picsum.photos/seed/blue/200/200' },
    { word: 'Đỏ thắm', example: 'Màu đỏ rực rỡ.', sentence: 'Cánh hoa hồng đỏ thắm.', imageUrl: 'https://picsum.photos/seed/red/200/200' },
    { word: 'To lớn', example: 'Kích thước vĩ đại.', sentence: 'Tòa nhà này thật to lớn.', imageUrl: 'https://picsum.photos/seed/big/200/200' },
    { word: 'Nhỏ bé', example: 'Kích thước rất ít.', sentence: 'Chú kiến thật nhỏ bé.', imageUrl: 'https://picsum.photos/seed/small/200/200' },
    { word: 'Thơm ngát', example: 'Mùi hương lan tỏa.', sentence: 'Hoa bưởi tỏa hương thơm ngát.', imageUrl: 'https://picsum.photos/seed/scent/200/200' },
    { word: 'Lấp lánh', example: 'Ánh sáng phản chiếu.', sentence: 'Những ngôi sao lấp lánh trên trời.', imageUrl: 'https://picsum.photos/seed/sparkle/200/200' },
    { word: 'Trắng tinh', example: 'Màu trắng hoàn toàn.', sentence: 'Áo sơ mi của em trắng tinh.', imageUrl: 'https://picsum.photos/seed/white/200/200' },
  ]
};

export const PRACTICE_QUESTIONS: Question[] = [
  { id: 'p1', type: 'multiple-choice', question: 'Từ nào sau đây là từ chỉ sự vật?', options: ['Chạy', 'Mèo', 'Đẹp', 'Hát'], answer: 'Mèo' },
  { id: 'p2', type: 'multiple-choice', question: 'Từ nào chỉ hoạt động?', options: ['Trường', 'Bút', 'Nhảy dây', 'Xanh'], answer: 'Nhảy dây' },
  { id: 'p3', type: 'fill-blank', question: 'Mẹ đang ... cơm trong bếp.', answer: 'nấu' },
  { id: 'p4', type: 'multiple-choice', question: 'Câu "Bầu trời xanh ngắt" thuộc kiểu câu nào?', options: ['Ai làm gì?', 'Ai thế nào?', 'Ai là gì?'], answer: 'Ai thế nào?' },
  { id: 'p5', type: 'multiple-choice', question: 'Câu "Em đang học bài" thuộc kiểu câu nào?', options: ['Ai làm gì?', 'Ai thế nào?', 'Ai là gì?'], answer: 'Ai làm gì?' },
  { id: 'p6', type: 'fill-blank', question: 'Hoa hồng tỏa hương ...', answer: 'thơm ngát' },
  { id: 'p7', type: 'multiple-choice', question: 'Từ nào là từ chỉ đặc điểm?', options: ['Học', 'Bàn', 'Siêng năng', 'Múa'], answer: 'Siêng năng' },
  { id: 'p8', type: 'fill-blank', question: 'Bạn Nam là học sinh ... của lớp.', answer: 'giỏi' },
];

export const WEEKLY_LESSONS: WeeklyLesson[] = [
  {
    week: 1,
    title: 'Từ chỉ sự vật - Câu kiểu Ai là gì?',
    content: 'Tuần này chúng ta cùng làm quen với các từ chỉ người, đồ vật, con vật và mẫu câu giới thiệu.',
    exercises: [
      { id: 'w1-1', type: 'multiple-choice', question: 'Từ chỉ sự vật là:', options: ['Đỏ', 'Bút chì', 'Cười'], answer: 'Bút chì' },
      { id: 'w1-2', type: 'fill-blank', question: 'Em ... là học sinh lớp 3.', answer: 'là' }
    ]
  },
  {
    week: 2,
    title: 'Từ chỉ hoạt động - Câu kiểu Ai làm gì?',
    content: 'Tuần này tập trung vào các từ chỉ cử động và mẫu câu kể về hoạt động.',
    exercises: [
      { id: 'w2-1', type: 'multiple-choice', question: 'Từ chỉ hoạt động là:', options: ['Quét nhà', 'Bác sĩ', 'Vàng'], answer: 'Quét nhà' },
      { id: 'w2-2', type: 'multiple-choice', question: 'Đặt câu "Ai làm gì?" với từ "Lan":', options: ['Lan rất ngoan', 'Lan đang quét sân', 'Lan là bạn em'], answer: 'Lan đang quét sân' }
    ]
  },
  {
    week: 3,
    title: 'Từ chỉ đặc điểm - Câu kiểu Ai thế nào?',
    content: 'Học về các từ chỉ màu sắc, hình dáng, tính nết và mẫu câu miêu tả.',
    exercises: [
      { id: 'w3-1', type: 'multiple-choice', question: 'Từ chỉ đặc điểm là:', options: ['Viết', 'Bông hoa', 'Chăm chỉ'], answer: 'Chăm chỉ' },
      { id: 'w3-2', type: 'multiple-choice', question: 'Câu nào miêu tả đặc điểm?', options: ['Bố đi làm', 'Em là học sinh', 'Con mèo rất xinh'], answer: 'Con mèo rất xinh' }
    ]
  }
];
