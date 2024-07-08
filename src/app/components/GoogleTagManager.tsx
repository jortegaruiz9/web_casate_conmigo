export default function GoogleTagManager() {
  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-10826440933"
      ></script>
      <script>
        {` window.dataLayer = window.dataLayer || []; function gtag()
        {window.dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'AW-10826440933');`}
      </script>
    </>
  );
}
