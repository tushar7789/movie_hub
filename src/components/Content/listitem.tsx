import { listItemPropInterface, movieItemInterface } from "@/interface/pageInterface";
import DefaultImage from "../../../public/images/default_image.png";
import { imgStyle } from '@/styles/styles';

export const ListItem: React.FC<listItemPropInterface> = ({ onClick, setFavListOpen, movies, low, high }) => {

    const handleClick = (id: any) => {
        if (setFavListOpen !== undefined) setFavListOpen(false);
        if (onClick !== undefined) onClick(id);
    }

    return (
        <>
            {
                movies?.map((ele: movieItemInterface, i: number) => {
                    if (i >= low && i <= high) {
                        return (
                            <div
                                key={ele["imdbID"]}
                                className='listitem-container'
                                onClick={() => handleClick(ele["imdbID"])}
                            >
                                <img src={ele["Poster"] !== "N/A" ? ele["Poster"] : DefaultImage.src} style={imgStyle} />
                                <div className="listitem-text-container">
                                    <span>{ele["Title"]}</span>
                                    <span>{ele["Year"]}</span>
                                </div>
                            </div>)
                    }
                })
            }
        </>
    );
}