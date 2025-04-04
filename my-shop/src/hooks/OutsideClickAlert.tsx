import { useEffect, useRef, ReactNode } from "react";

type OutsideClickAlertProps = {
  onOutsideClick: () => void;
  children?: ReactNode; // children optional olmalıdır
  basketRef: React.RefObject<HTMLDivElement | null>; // basketRef tipi dəyişdi
};

const OutsideClickAlert: React.FC<OutsideClickAlertProps> = ({ onOutsideClick, children, basketRef }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Basket divinin daxilində klik varsa, outside click hadisəsini işlətmə
      if (ref.current && !ref.current.contains(event.target as Node) && basketRef.current && !basketRef.current.contains(event.target as Node)) {
        onOutsideClick(); // Yalnız basketin xaricində klik edildikdə çalışacaq
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onOutsideClick, basketRef]);

  return <div ref={ref}>{children || null}</div>;
};

export default OutsideClickAlert;
