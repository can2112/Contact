// import { Contact } from '../Contact'
import ContactCart from '../contact/ContactCart';
import styles from './list.module.css'
import { FaSadTear } from "react-icons/fa"
import useContacts from '../../hooks/UseContacts';

export function List() {
    const { filteredContacts,
        search } = useContacts();
    return(
        <section className={styles.container}>
            {filteredContacts.map((item)=>{
                return(
                    <ContactCart key={item.id} contactData={item} />
                )
            })}
            {filteredContacts.length <= 0 && (
                <div className={styles.empty}>
                    <FaSadTear size={50} />
                    <div>
                        {search ? (
                            <>
                                <strong>No contacts found...</strong>
                                <p>Search for another or add a new one</p>
                            </>
                        ) : (
                            <>
                                <strong>"Your list is empty..."</strong>
                                <p>Add your contacts to start interacting</p>
                            </>
                        )}
                    </div>
                </div>
            )}
        </section>
    )
}