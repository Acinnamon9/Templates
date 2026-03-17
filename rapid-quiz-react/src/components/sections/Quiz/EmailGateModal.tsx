import React from 'react';

interface EmailGateModalProps {
  onClose: () => void;
  onSubmit: (email: string) => void;
}

const EmailGateModal: React.FC<EmailGateModalProps> = ({ onClose, onSubmit }) => {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    onSubmit(email);
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-2000 p-4 transition-opacity duration-300">
      <div className="bg-white p-xl rounded-lg max-w-[500px] w-full relative transform transition-transform duration-300">
        <button className="absolute top-4 right-4 text-2xl text-secondary hover:text-primary" onClick={onClose}>×</button>
        <span className="inline-block bg-accent text-white px-3 py-1 rounded text-[0.75rem] font-bold mb-md uppercase">UNLOCK YOUR RESULTS</span>
        <h2 className="text-[1.75rem] font-heading font-bold mb-sm">Enter Your Email Below</h2>
        <p className="text-secondary mb-lg">
          Get your personalized Growth Diagnostic report instantly.
        </p>

        <form className="flex flex-col gap-md" onSubmit={handleFormSubmit}>
          <label className="text-sm font-medium text-primary" htmlFor="emailInput">Work Email Address</label>
          <input
            type="email"
            name="email"
            id="emailInput"
            className="p-[14px] border border-border rounded-sm text-base focus:outline-none focus:border-accent"
            placeholder="you@company.com"
            required
          />
          <div className="text-[0.8rem] text-secondary">
            <span>🔒</span> Secure • No spam • Unsubscribe anytime
          </div>
          <button type="submit" className="bg-accent text-white p-4 font-semibold rounded-sm hover:bg-[#9a4a2d] transition-colors w-full uppercase tracking-wide">
            Send Results →
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailGateModal;
