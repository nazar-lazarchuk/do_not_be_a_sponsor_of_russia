import { connect } from '../lib/db';

connect()
    .then(() => console.log('database successfully connected 🙌'))
    .catch(() => console.log('database connection error ⛔'));
