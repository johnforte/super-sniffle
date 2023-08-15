export function PictureComponent(){
    return (
        <picture>
            <source srcSet="images/mobile.png" media="(max-width: 640px)" />
            <source srcSet="images/tablet.png" media="(max-width: 768px)" /> 
             <source srcSet="images/desktop.png" media="(max-width: 1240px)" /> 
           <img src="images/desktop.png"  />
        
        </picture>
    );
}
