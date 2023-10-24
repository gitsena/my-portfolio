import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa6";

export const Contact = () => {
  return (
    <div class="relative self-center m-auto flex justify-center w-60 -bottom-12 gap-x-4">
      <a
        href="https://www.linkedin.com/in/andr%C3%A9-dias-de-sena-b6b915225/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin size={60} fill="white" />
      </a>
      <a href="https://github.com/gitsena" target="_blank" rel="noreferrer">
        <FaGithub size={60} fill="white" />
      </a>
      <a href="https://wa.me/5511962759225" target="_blank" rel="noreferrer">
        <FaWhatsapp size={60} fill="white" />
      </a>
      <a
        href="mailto:andrediasdesena@gmail.com?subject=&body="
        target="_blank"
        rel="noreferrer"
      >
        <FaEnvelope size={60} fill="white" />
      </a>
    </div>
  );
};
