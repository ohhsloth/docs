import React from 'react'

const Footer:React.FC = () => {
    const sections = [
    {
      title: "Product",
      links: [
        { name: "Home", path: "/" },
        { name: "Login", path: "/login" },
        { name: "Register", path: "/register" },
      ],
    },
    {
      title: "Features",
      links: [
        { name: "Traffic", path: "/" },
        { name: "Contributions", path: "/" },
        { name: "Pull requests", path: "/" },
        { name: "Issues", path: "/" },
        { name: "Profiles", path: "/dashboard" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "Contact", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: "Privacy", path: "/" },
        { name: "Terms", path: "/" },
      ],
    },
    {
      title: "Compare",
      links: [{ name: "GitHub Insights", path: "/" }],
    },
  ];
  return (
   <>
    <footer className="bg-white py-16 mt-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
          <div className="max-w-xs">
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Your repos have a story. See it in traffic, stars, commits, and contributors, all in one place.
            </p>
            <span className="text-gray-400 text-sm">© 2026</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-16">
            {sections.map((section) => (
              <div key={section.title}>
                <h3 className="text-gray-900 font-bold text-sm mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.path}
                        className="text-gray-400 hover:text-gray-600 text-sm transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
   </>
  )
}

export default Footer