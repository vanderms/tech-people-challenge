

//  In case we need do deploy the website in a non root directory (v.g. Github pages),
//  all paths used in the components, except next/link component, 
//  must be updated to reflect the directory path.
//  This function is used to do it automatically.
export default function path(src){
  return src;
}
