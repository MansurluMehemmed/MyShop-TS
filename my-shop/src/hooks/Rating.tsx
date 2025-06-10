interface RatingType {
    rating:number | string
    totalStars?:number
}
const Rating:React.FC<RatingType>  = ({rating, totalStars = 5 }) => {
  // 100% = 5 ulduz, nisbət olaraq doldurmanı faizlə veririk
  const starPercentage = (Number(rating) / totalStars) * 100;

  return (
    <div style={{ 
      cursor:'pointer',
      position: 'relative', 
      display: 'inline-block', 
      fontSize: '30px', 
      color: '#ccc', 
      fontFamily: 'Arial, sans-serif',
      lineHeight: 1,
      userSelect: 'none'
    }}>
     
      {'★★★★★'}
      
      
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        width: `${starPercentage}%`,
        color: '#f5b301', 
      }}>
        {'★★★★★'}
      </div>
    </div>
  );
};

export default Rating ;
