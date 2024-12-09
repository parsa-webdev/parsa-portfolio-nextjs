"use client";

import styled from "styled-components";

const TestButton = styled.button`
  background-color: #4f46e5; /* Tailwind's indigo-600 */
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem; /* Tailwind's rounded-md */
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #4338ca; /* Tailwind's indigo-700 */
    transform: scale(1.05);
  }
`;
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">
        Testing <span className="text-blue-500">Styled Components</span> with
        Tailwind!
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        This page combines Tailwind utilities and Styled Components.
      </p>
      {/* Styled Components button */}
      <TestButton>Styled Button</TestButton>

      {/* Tailwind button */}
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        Tailwind Button
      </button>
    </main>
  );
}
