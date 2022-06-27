// const Layouts = (props) => {
//   const dispatch = useDispatch();

//   const [isEmenu, setIsEmenu] = useState(window.location.hostname.includes('emenu'));
//   const [enableOrdering, setEnableOrdering] = useState(true);
//   const [logoCompanyState, setLogoCompanyState] = useState(config.url_logo);
//   const [infoCompanyState, setInfoCompanyState] = useState({});
  
//   const { isLoggedIn} = useSelector(state => state.auth);
//   const { setting} = useSelector(state => state.order);

//   useEffect(() => {
//       const getAllInfo =  async () => {
//         let infoCompany = await dispatch(
//           MasterDataAction.getInfoCompany()
//         );
    
//         if (isLoggedIn) {
//           Promise.all([
//             dispatch(InboxAction.getBroadcast({ take: 5, skip: 0 })),
//             dispatch(HistoryAction.getBasketPending()),
//           ]);
//         }

//         localStorage.setItem(
//           `${config.prefix}_infoCompany`,
//           JSON.stringify(encryptor.encrypt(infoCompany))
//         );
    
//         if (infoCompany) {
//           document.title = `${isEmenu ? 'E-Menu' : 'Web Ordering'} - ${
//             infoCompany.companyName
//           }`;
//           try {
//             document.getElementById('icon-theme').href =
//               infoCompany.imageURL || logoCompanyState;
//           } catch (e) {
//             console.log(e);
//           }
//           setInfoCompanyState(infoCompany);
//         }
    
//         // TODO: Change this with react router use useRouteMatch
//         if (window.location.href.includes('/signin')) {
//           try {
//             console.log('SIGN IN');
//             setTimeout(() => {
//               document.getElementById('login-register-btn').click();
//             }, 700);
//           } catch (e) {
//             console.log(e);
//           }
//         }
//       };
//       getAllInfo();
//   }, []);

//   useEffect(() => {
//       let enableOrdering = setting.find((items) => items.settingKey === 'EnableOrdering');
//       if (enableOrdering) {
//         setEnableOrdering(enableOrdering.settingValue);
//       }
//       let logoCompany = setting.find((items) => items.settingKey === 'Logo');
//       if (logoCompany) {
//         try {
//           document.getElementById('icon-theme').href =
//             infoCompanyState.imageURL || logoCompany.settingValue;
//         } catch (e) {
//           console.log(e);
//         }
//         setLogoCompanyState(infoCompanyState.imageURL || logoCompany.settingValue);
//       }
//   }, []);
  
//   return <div>hlaoo</div>;
// };