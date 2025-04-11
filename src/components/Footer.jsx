function Footer() {
    return (
      <footer className="bg-gray-800 text-white text-center py-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Sidarte Rangadamalou —{' '}
          <a
            href="https://github.com/RSidarte"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-400"
          >
            GitHub
          </a>
        </p>
      </footer>
    );
  }
  
  export default Footer;
  