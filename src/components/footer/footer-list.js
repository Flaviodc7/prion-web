import { BsYoutube, BsFacebook } from "react-icons/bs"
import { FaBandcamp } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"

export const socials = [
    {
        id: 1,
        link: "https://www.facebook.com/Priondeathmetal",
        icon: <BsFacebook />,
        alt: "Facebook Official",
    },
    {
        id: 2,
        link: "https://prion.bandcamp.com/",
        icon: <FaBandcamp />,
        alt: "Bandcamp Official",
    },
    {
        id: 3,
        link: "http://www.youtube.com/user/priondeath",
        icon: <BsYoutube />,
        alt: "YouTube Official"
    },
    {
        id: 3,
        link: "mailto:priondeth@yahoo.com",
        icon: <IoMdMail />,
        alt: "Mail"
    },
]