import { cloneElement } from 'react';

export default function ContextProvidersHelper({ providers, children }) {
  const renderProvider = (providers, children) => {
    const [provider, ...theRestProviders] = providers;

    if (provider) {
      return cloneElement(
        provider,
        null,
        renderProvider(theRestProviders, children),
      );
    }
    return children;
  };

  return renderProvider(providers, children);
}
