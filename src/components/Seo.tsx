import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SeoProps {
    title: string;
    description?: string;
    keywords?: string;
    image?: string;
}

const Seo = ({
    title,
    description = "TG PHARMZ LLP - Leading Pharmaceutical Manufacturer & Exporter. WHO-GMP Certified facilities producing high-quality Tablets, Injections, and more.",
    keywords = "pharmaceutical, manufacturer, exporter, india, generic medicines, third party manufacturing, pharma franchise",
    image = "/og-image.jpg"
}: SeoProps) => {
    const { pathname } = useLocation();
    const siteUrl = 'https://tgpharmz.com'; // Replace with actual domain
    const fullUrl = `${siteUrl}${pathname}`;
    const fullTitle = `${title} | TG PHARMZ`;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={fullUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />
        </Helmet>
    );
};

export default Seo;
