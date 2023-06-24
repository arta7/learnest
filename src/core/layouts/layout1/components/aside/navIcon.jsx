export const renderIcon = ({ active = "false", link = "/" }) => {
    if (link === "/") {
        return (
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.86 6.36999L12.93 0.829994C11.86 -0.0300058 10.13 -0.0300058 9.07002 0.819994L2.14002 6.36999C1.36002 6.98999 0.860021 8.29999 1.03002 9.27999L2.36002 17.24C2.60002 18.66 3.96002 19.81 5.40002 19.81H16.6C18.03 19.81 19.4 18.65 19.64 17.24L20.97 9.27999C21.13 8.29999 20.63 6.98999 19.86 6.36999ZM11 13.5C9.62002 13.5 8.50002 12.38 8.50002 11C8.50002 9.61999 9.62002 8.49999 11 8.49999C12.38 8.49999 13.5 9.61999 13.5 11C13.5 12.38 12.38 13.5 11 13.5Z" fill={active === true ? "#7E1416" : "#D28486"} />
            </svg>

        );
    }
    if (link === "/shop") {
        return (

            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.86 8.27L22.57 5.5C22.15 2.48 20.78 1.25 17.85 1.25H15.49H14.01H10.97H9.49002H7.09002C4.15002 1.25 2.79002 2.48 2.36002 5.53L2.09002 8.28C1.99002 9.35 2.28002 10.39 2.91002 11.2C3.67002 12.19 4.84002 12.75 6.14002 12.75C7.40002 12.75 8.61002 12.12 9.37002 11.11C10.05 12.12 11.21 12.75 12.5 12.75C13.79 12.75 14.92 12.15 15.61 11.15C16.38 12.14 17.57 12.75 18.81 12.75C20.14 12.75 21.34 12.16 22.09 11.12C22.69 10.32 22.96 9.31 22.86 8.27Z" fill={active === true ? "#7E1416" : "#D28486"} />
                <path d="M11.85 16.66C10.58 16.79 9.62 17.87 9.62 19.15V21.89C9.62 22.16 9.83999 22.38 10.11 22.38H14.88C15.15 22.38 15.37 22.16 15.37 21.89V19.5C15.38 17.41 14.15 16.42 11.85 16.66Z" fill={active === true ? "#7E1416" : "#D28486"} />
                <path d="M21.87 14.4V17.38C21.87 20.14 19.63 22.38 16.87 22.38C16.6 22.38 16.38 22.16 16.38 21.89V19.5C16.38 18.22 15.99 17.22 15.23 16.54C14.56 15.93 13.65 15.63 12.52 15.63C12.27 15.63 12.02 15.64 11.75 15.67C9.97001 15.85 8.62 17.35 8.62 19.15V21.89C8.62 22.16 8.4 22.38 8.13 22.38C5.37 22.38 3.13 20.14 3.13 17.38V14.42C3.13 13.72 3.82 13.25 4.47 13.48C4.74 13.57 5.01 13.64 5.29 13.68C5.41 13.7 5.54 13.72 5.66 13.72C5.82 13.74 5.98 13.75 6.14 13.75C7.3 13.75 8.44 13.32 9.34 12.58C10.2 13.32 11.32 13.75 12.5 13.75C13.69 13.75 14.79 13.34 15.65 12.6C16.55 13.33 17.67 13.75 18.81 13.75C18.99 13.75 19.17 13.74 19.34 13.72C19.46 13.71 19.57 13.7 19.68 13.68C19.99 13.64 20.27 13.55 20.55 13.46C21.2 13.24 21.87 13.72 21.87 14.4Z" fill={active === true ? "#7E1416" : "#D28486"} />
            </svg>

        );
    }
    if (link === "/profile") {
        return (
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.4" d="M12.5 2C9.88 2 7.75 4.13 7.75 6.75C7.75 9.32 9.76 11.4 12.38 11.49C12.46 11.48 12.54 11.48 12.6 11.49C12.62 11.49 12.63 11.49 12.65 11.49C12.66 11.49 12.66 11.49 12.67 11.49C15.23 11.4 17.24 9.32 17.25 6.75C17.25 4.13 15.12 2 12.5 2Z" fill={active === true ? "#7E1416" : "#D28486"} />
                <path d="M17.58 14.15C14.79 12.29 10.24 12.29 7.42996 14.15C6.15996 15 5.45996 16.15 5.45996 17.38C5.45996 18.61 6.15996 19.75 7.41996 20.59C8.81996 21.53 10.66 22 12.5 22C14.34 22 16.18 21.53 17.58 20.59C18.84 19.74 19.54 18.6 19.54 17.36C19.53 16.13 18.84 14.99 17.58 14.15Z" fill={active === true ? "#7E1416" : "#D28486"} />
            </svg>

        );
    }
    if (link === "/payment") {
        return (
            <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.28 0H4.72C0.94 0 0 1.01 0 5.04V16.3C0 18.96 1.46 19.59 3.23 17.69L3.24 17.68C4.06 16.81 5.31 16.88 6.02 17.83L7.03 19.18C7.84 20.25 9.15 20.25 9.96 19.18L10.97 17.83C11.69 16.87 12.94 16.8 13.76 17.68C15.54 19.58 16.99 18.95 16.99 16.29V5.04C17 1.01 16.06 0 12.28 0ZM11.25 8.75H5.75C5.34 8.75 5 8.41 5 8C5 7.59 5.34 7.25 5.75 7.25H11.25C11.66 7.25 12 7.59 12 8C12 8.41 11.66 8.75 11.25 8.75Z" fill={active === true ? "#7E1416" : "#D28486"} />
            </svg>

        );
    }
    if (link === "/support") {
        return (
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.24994 18.65C2.83994 18.65 2.49994 18.31 2.49994 17.9V12.2C2.44994 9.49 3.45994 6.93 5.33994 5.01C7.21994 3.1 9.73994 2.05 12.4499 2.05C17.9899 2.05 22.4999 6.56 22.4999 12.1V17.8C22.4999 18.21 22.1599 18.55 21.7499 18.55C21.3399 18.55 20.9999 18.21 20.9999 17.8V12.1C20.9999 7.39 17.1699 3.55 12.4499 3.55C10.1399 3.55 7.99994 4.44 6.40994 6.06C4.80994 7.69 3.95994 9.86 3.99994 12.18V17.89C3.99994 18.31 3.66994 18.65 3.24994 18.65Z" fill={active === true ? "#7E1416" : "#D28486"} />
                <path d="M6.44 12.45H6.31C4.21 12.45 2.5 14.16 2.5 16.26V18.14C2.5 20.24 4.21 21.95 6.31 21.95H6.44C8.54 21.95 10.25 20.24 10.25 18.14V16.26C10.25 14.16 8.54 12.45 6.44 12.45Z" fill={active === true ? "#7E1416" : "#D28486"} />
                <path d="M18.69 12.45H18.56C16.46 12.45 14.75 14.16 14.75 16.26V18.14C14.75 20.24 16.46 21.95 18.56 21.95H18.69C20.79 21.95 22.5 20.24 22.5 18.14V16.26C22.5 14.16 20.79 12.45 18.69 12.45Z" fill={active === true ? "#7E1416" : "#D28486"} />
            </svg>

        );
    }

}