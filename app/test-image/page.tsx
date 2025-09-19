export default function TestImagePage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Image Test Page</h1>
      
      <div className="space-y-4">
        <div>
          <p className="font-bold">Test 1: Logo from public root</p>
          <img src="/zaza_z_logo.png" alt="Logo" className="w-32 h-32 border" />
        </div>
        
        <div>
          <p className="font-bold">Test 2: Placeholder from public root</p>
          <img src="/placeholder-user.jpg" alt="Placeholder" className="w-32 h-32 border" />
        </div>
        
        <div>
          <p className="font-bold">Test 3: Founder from images folder</p>
          <img src="/images/founder.jpg" alt="Founder" className="w-32 h-32 border" />
        </div>
        
        <div>
          <p className="font-bold">Test 4: External image</p>
          <img 
            src="https://via.placeholder.com/150" 
            alt="External" 
            className="w-32 h-32 border" 
          />
        </div>
        
        <div>
          <p className="font-bold">Test 5: Data URL</p>
          <img 
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150'%3E%3Crect width='150' height='150' fill='%23ddd'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='Arial' font-size='20' fill='%23333'%3ETest%3C/text%3E%3C/svg%3E"
            alt="Data URL" 
            className="w-32 h-32 border" 
          />
        </div>
      </div>
    </div>
  )
}