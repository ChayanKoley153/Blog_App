import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import './loader.css';

export default function FormLoader() {
    return (
        <div className="skeleton-container">
            <div className="skeleton-card">

                <Skeleton height={35} width={180} style={{ marginBottom: 25 }} />

                <Skeleton height={45} style={{ marginBottom: 15 }} />
                <Skeleton height={45} style={{ marginBottom: 15 }} />
                <Skeleton height={45} style={{ marginBottom: 15 }} />

                <Skeleton height={45} style={{ marginTop: 10 }} />

                <Skeleton
                    height={20}
                    width={180}
                    style={{ marginTop: 20 }}
                />
            </div>
        </div>
    );
}