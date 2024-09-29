import React from "react";

import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";


const ServiceCard = ({service, index }) => {
  const { name, desc, bgColor, textColor } = service;

  return (
    <div className="py-[30px] px-3 lg:px-5">
      <h2 className="text-[26px] leading-9 text-headingColor font-[700]">
        {name}
      </h2>
      <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
        {desc}
      </p>
      <div className="flex items-center justify-between mt-[30px]">
  <Link
    to="/doctors"
    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
  >
    <BsArrowRight className="group-hover:text-white w-6 h-5" />
  </Link>
  <span
  className="w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[600]"
  style={{
    background: `${bgColor}`,
    color: `${textColor}`,
    borderRadius: "6px 0 0 6px",
  }}
>
  {index + 1}
</span>

</div>
    </div>
  );
};

export default ServiceCard;
{/* Explication :
ServiceCard : Ce composant est responsable d'afficher les détails d'un service individuel, comme son nom (name) et sa description (desc), qui sont extraits de l'objet service passé en tant que prop.

Props :

service : Un objet contenant les informations sur chaque service, avec des propriétés comme name (le nom du service) et desc (la description).
index : Un identifiant unique (l'index dans la liste des services). Il n'est pas utilisé directement ici, mais il peut servir pour des cas spécifiques (par exemple, des animations spécifiques à chaque élément).
Classes CSS :

Le conteneur div autour du texte a une marge interne (padding) définie par py-[30px] (padding vertical) et px-3 (padding horizontal). Sur les grands écrans (lg), le padding horizontal passe à px-5.
Le titre (h2) du service est stylé avec une taille de police de 26px, une hauteur de ligne de 9 (ce qui définit l'espacement entre les lignes) et une couleur de texte (text-headingColor) avec une épaisseur de police (font-[700]).
La description (p) a une taille de police de 16px avec une hauteur de ligne de 7 et un léger espacement supérieur (mt-4).*/}