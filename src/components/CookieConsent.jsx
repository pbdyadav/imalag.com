import React, { useEffect, useState } from 'react';

export default function CookieConsent() {
  const getCookie = (name) => {
    return document.cookie.split('; ').find(row => row.startsWith(name + '='))?.split('=')[1];
  };

  const [accepted, setAccepted] = useState(() => getCookie('cookieConsent') === 'yes');

  useEffect(() => {
    if (accepted) {
      document.cookie = "cookieConsent=yes; path=/; domain=.imalag.com; max-age=31536000; Secure; SameSite=Lax";
    }
  }, [accepted]);

  if (accepted) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 z-50">
      <div className="max-w-3xl mx-auto bg-white/95 shadow-lg rounded-lg p-4 flex flex-col md:flex-row items-start md:items-center gap-3">
        <div className="flex-1 text-sm text-gray-700">
          We use cookies to provide a better shopping experience, analyze traffic and to show personalized ads. By continuing, you agree to our <a href="/privacy-policy" className="underline">Privacy Policy</a>.
        </div>
        <div className="flex-shrink-0">
          <button
            onClick={() => setAccepted(true)}
            className="bg-terracotta text-white px-4 py-2 rounded mr-2"
          >
            Accept
          </button>
          <a href="/privacy-policy" className="text-sm text-gray-600 hover:underline">Learn more</a>
        </div>
      </div>
    </div>
  );
}
