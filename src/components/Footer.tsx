
export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-background border-t">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {year} Yosua Gerrard Ferdinand. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
}
