import React from "react";

const sizeClasses = {
  txtPoppinsRegular14Black900: "font-normal font-poppins",
  txtPoppinsBlack24: "font-black font-poppins",
  txtPoppinsLight16: "font-light font-poppins",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtPoppinsRegular14Bluegray700: "font-normal font-poppins",
  txtPoppinsSemiBold40: "font-poppins font-semibold",
  txtPoppinsSemiBold30: "font-poppins font-semibold",
  txtPoppinsRegular25: "font-normal font-poppins",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsMedium24: "font-medium font-poppins",
  txtPoppinsMedium14: "font-medium font-poppins",
  txtPoppinsRegular11: "font-normal font-poppins",
  txtPoppinsMedium12: "font-medium font-poppins",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtPoppinsRegular30: "font-normal font-poppins",
  txtPoppinsMedium24WhiteA700: "font-medium font-poppins",
  txtPoppinsRegular80: "font-normal font-poppins",
  txtPoppinsMedium24Blue400: "font-medium font-poppins",
  txtPoppinsMedium18: "font-medium font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
