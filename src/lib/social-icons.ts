import { Mail } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa6";
import type { IconType } from "react-icons";
import type { SocialLink } from "../data/content";

export const socialIconMap: Record<SocialLink["icon"], IconType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaXTwitter,
  facebook: FaFacebook,
  instagram: FaInstagram,
  mail: Mail,
};
