import { Button } from '@/components/ui/button';
import { Smartphone, Laptop, Home, Watch, Shirt, Package } from 'lucide-react';

const categories = [
  { name: 'All', icon: Package },
  { name: 'Electronics', icon: Smartphone },
  { name: 'Fashion', icon: Shirt },
  { name: 'Home', icon: Home },
  { name: 'Gadgets', icon: Watch },
];

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <section className="py-8 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">Shop by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse through our carefully curated categories to find exactly what you're looking for
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            const isSelected = selectedCategory === category.name;
            
            return (
              <Button
                key={category.name}
                variant={isSelected ? "default" : "outline"}
                onClick={() => onCategoryChange(category.name)}
                className={`gap-2 transition-all duration-300 hover:scale-105 ${
                  isSelected 
                    ? 'bg-gradient-primary shadow-brand text-white border-0' 
                    : 'hover:border-primary/50'
                }`}
              >
                <Icon className="h-5 w-5" />
                {category.name}
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;