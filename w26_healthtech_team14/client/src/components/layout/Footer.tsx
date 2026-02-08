import React from 'react';

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h4 className="font-semibold">About CCCARE</h4>
          <p className="text-sm text-gray-300">Connecting research, care teams and communities to deliver better outcomes.</p>
        </div>
        <div>
          <h4 className="font-semibold">Programs & Services</h4>
          <ul className="text-sm text-gray-300">
            <li>Exercise Programs</li>
            <li>Volunteer Services</li>
            <li>Research Studies</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Research & Education</h4>
          <ul className="text-sm text-gray-300">
            <li>Ethics</li>
            <li>Publications</li>
            <li>Training</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="text-sm text-gray-300">200 University Ave W, Waterloo, ON<br/>info@cccare.uw.edu</p>
        </div>
      </div>
      <div className="bg-black/80 text-gray-400 text-sm py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div>© {new Date().getFullYear()} CCCARE — University of Waterloo</div>
          <div className="flex items-center gap-4 mt-2 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
