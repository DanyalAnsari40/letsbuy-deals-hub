import { Star, ExternalLink, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  rating: number;
  reviewCount: number;
  description: string;
  features: string[];
  affiliateLink: string;
}

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

const ProductCard = ({ product, onViewDetails }: ProductCardProps) => {
  const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const handleShopNow = () => {
    window.open(product.affiliateLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className="group relative overflow-hidden gradient-card border-border/50 hover:shadow-hover transition-all duration-300 hover:scale-[1.02]">
      {/* Discount Badge */}
      {discountPercentage > 0 && (
        <Badge className="absolute top-3 left-3 z-10 bg-destructive text-destructive-foreground">
          -{discountPercentage}%
        </Badge>
      )}

      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg aspect-square">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <div className="mb-2">
          <Badge variant="secondary" className="text-xs">
            {product.category}
          </Badge>
        </div>

        <h3 className="font-semibold text-lg mb-2 line-clamp-2 text-foreground group-hover:text-primary transition-colors">
          {product.title}
        </h3>

        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm font-medium">{product.rating}</span>
          <span className="text-sm text-muted-foreground">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold text-primary">
            ${product.price}
          </span>
          {product.originalPrice > product.price && (
            <span className="text-lg text-muted-foreground line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 space-y-2">
        <Button
          variant="outline"
          className="w-full gap-2 group/btn hover:bg-muted"
          onClick={() => onViewDetails(product)}
        >
          <Eye className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
          See More
        </Button>
        
        <Button
          className="w-full gap-2 bg-gradient-primary hover:shadow-brand group/btn"
          onClick={handleShopNow}
        >
          <ExternalLink className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
          Shop Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;