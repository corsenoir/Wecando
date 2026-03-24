export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl mb-4">We Can Do</h3>
            <p className="text-gray-400">
              Professional fencing installation and comprehensive home maintenance services you can trust.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Privacy Fencing</li>
              <li>General Repairs</li>
              <li>Painting Services</li>
              <li>Yard Maintenance</li>
              <li>Deck & Patio Work</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Phone: (250) 505-7916</li>
              <li>Email: wecandomaintenance@gmail.com </li>
              <li>Service Area: Nelson, BC and area</li>
            </ul>
          </div> 
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2026 We Can Do. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}