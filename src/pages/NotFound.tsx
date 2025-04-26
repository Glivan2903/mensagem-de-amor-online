
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-love-50">
      <div className="text-center px-4">
        <h1 className="font-playfair text-6xl font-bold text-love-700 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">Oops! Página não encontrada</p>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          A página que você está procurando pode ter sido removida, renomeada ou está temporariamente indisponível.
        </p>
        <Link to="/" className="btn-primary inline-flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Voltar para a Página Inicial
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
