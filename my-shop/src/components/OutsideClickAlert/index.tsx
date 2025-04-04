// import React, { useRef, useEffect } from "react";

// /**
//  * Hook that alerts clicks outside of the passed ref
//  */
// function useOutsideAlerter(ref, callback) {
//   /**
//    * Alert if clicked on outside of element
//    */
//   function handleClickOutside(event) {
//     if (
//       event.target.getAttribute("data-name") === "language" ||
//       event.target.getAttribute("data-name") === "currency"
//     )
//       return;
//     if (ref.current && !ref.current.contains(event.target)) callback();
//   }
//   useEffect(() => {
//     try {
//       // Bind the event listener
//       document.addEventListener("mousedown", (e) => handleClickOutside(e));
//       return () => {
//         // Unbind the event listener on clean up
//         document.removeEventListener("mousedown", (e) => handleClickOutside(e));
//       };
//     } catch (error) {
//       console.log(error.message);
//     }
//   }, [ref, callback]);
// }

// /**
//  * Component that alerts if you click outside of it
//  */
// function OutsideClickAlert(props) {
//   const wrapperRef = useRef(null);
//   useOutsideAlerter(wrapperRef, () => {
//     console.log(wrapperRef);

//     let onCLick =
//       typeof props.onOutsideClick === "function"
//         ? props.onOutsideClick
//         : () => {};
//     onCLick();
//   });
//   return <div ref={wrapperRef}>{props.children}</div>;
// }
// export default OutsideClickAlert;
