import React from 'react';

import {services} from '../../assets/data/services';
import ServiceCard from './ServiceCard';


const ServiceList = () => {
  return <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] lg:mt-[55px]'>
    {services.map((service, index) => (
      <ServiceCard  service={service} index={index} key={index}/>
    ))}
  </div>
};

{/* Explication ligne par ligne :
const ServiceList = () => { : Ceci est une fonction fléchée. ServiceList est une fonction qui renvoie du JSX (le code HTML dans React). Cela signifie que ce composant n'a pas d'état ni de cycle de vie propre, il se contente de rendre une liste basée sur des données.

return ( ... ) : Tout ce qui se trouve dans ce return est du JSX (qui ressemble à du HTML mais qui est en réalité du JavaScript). Ici, c'est la structure du composant.
 
services.map() : Cette méthode JavaScript est utilisée pour parcourir le tableau services (qui contient plusieurs objets représentant des services). Pour chaque service dans ce tableau, la méthode map() va créer un nouveau composant ServiceCard.

service={service} : Chaque objet service (par exemple, { id: 1, title: "Web Development", description: "We offer...", ... }) est passé en tant que prop au composant ServiceCard. Le composant ServiceCard peut alors accéder aux détails du service via cette prop service.

index={index} : L'index du service dans le tableau est aussi passé en tant que prop. Cela peut être utile pour identifier la position du service ou pour appliquer une logique spécifique basée sur l'index.

key={index} : Dans React, chaque élément d'une liste doit avoir une clé unique pour que React puisse identifier et optimiser la mise à jour des éléments. Ici, on utilise l'index du tableau comme clé (key={index}), mais dans des cas plus complexes, il est recommandé d'utiliser des identifiants uniques.*/ }

export default ServiceList
