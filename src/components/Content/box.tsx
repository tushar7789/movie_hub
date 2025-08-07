import { childrenPropInterface } from "@/interface/pageInterface";

export const Box: React.FC<childrenPropInterface> = ({ children }) => {
    return (
        <div className='box-container'>
            {children}
        </div>
    );
}