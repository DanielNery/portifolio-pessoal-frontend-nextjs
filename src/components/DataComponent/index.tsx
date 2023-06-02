import React, { useEffect, useState } from 'react';
import Loading from '../Loading';

type DataComponentProps = {
  request: () => Promise<any>;
};

const DataComponent: React.FC<DataComponentProps> = ({ request }) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await request();
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return loading ? <Loading /> : <div>{data}</div>;
};

export default DataComponent;
