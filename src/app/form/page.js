// src/app/form/page.js
'use client'

import Link from 'next/link'
import React, { useState } from 'react';
import SymptomForm from '../components/form/SymptomForm';

const initialSymptoms = {
  "mata": {
    "mata_cekung": 0,
    "nyeri_dibelakang_mata": 0,
    "menguningnya_mata": 0,
    "penglihatan_kabur_dan_terdistorsi": 0,
    "mata_merah": 0,
    "wajah_dan_mata_bengkak": 0,
    "air_mata_berlebih": 0,
    "gangguan_penglihatan": 0
  },
  "kepala": {
    "sakit_kepala": 0,
    "pusing": 0,
    "sensasi_berputar": 0,
    "kehilangan_keseimbangan": 0,
    "goyah": 0,
    "satu_sisi_tubuh_melemah": 0,
    "perubahan_sensorium": 0,
    "kurangnya_konsentrasi": 0,
    "demam_tinggi": 0,
    "demam_ringan": 0,
    "demam_tifoid": 0
  },
  "hidung": {
    "bersin_bersin": 0,
    "tekanan_sinus": 0,
    "hidung_berair": 0,
    "hidung_tersumbat": 0,
    "kehilangan_penciuman": 0,
    "luka_merah_di_sekitar_hidung": 0
  },
  "pernafasan": {
    "batuk": 0,
    "sesak_napas": 0
  },
  "mulut": {
    "sariawan": 0,
    "bibir_kering_dan_kesemutan": 0,
    "ucapan_tidak_jelas": 0
  },
  "leher": {
    "nyeri_leher": 0,
    "leher_kaku": 0
  },
  "tenggorokan": {
    "bercak_di_tenggorokan": 0,
    "dahak": 0,
    "iritasi_tenggorokan": 0,
    "dahak_mukoid": 0,
    "dahak_sputum": 0,
    "dahak_berdarah": 0
  },
  "badan": {
    "menggigil": 0,
    "merinding": 0,
    "nyeri_dada": 0,
    "sakit_punggung": 0,
    "kelelahan": 0,
    "dehidrasi": 0,
    "kelebihan_cairan": 0,
    "tidak_enak_badan": 0,
    "anggota_tubuh_melemah": 0,
    "kram": 0,
    "kaku_saat_ingin_bergerak": 0,
    "koma": 0,
    "kenaikan_berat_badan": 0,
    "penurunan_berat_badan": 0,
    "sakit_perut_seluruh": 0,
    "sakit_perut_bagian": 0,
    "asam_lambung": 0,
    "muntah": 0,
    "gangguan_pencernaan": 0,
    "mual": 0,
    "nafsu_makan_hilang": 0,
    "sembelit": 0,
    "nyeri_perut": 0,
    "diare": 0,
    "pembengkakan_perut": 0,
    "nyeri_saat_buang_air_besar": 0,
    "nyeri_di_daerah_anus": 0,
    "tinja_berdarah": 0,
    "iritasi_di_anus": 0,
    "bengkak_ekstremitas": 0,
    "rasa_lapar_berlebihan": 0,
    "mengeluarkan_gas": 0,
    "peningkatan_nafsu_makan": 0,
    "pendarahan_perut": 0,
    "perut_kembung": 0,
    "riwayat_konsumsi_alkohol": 0,
    "panas_saat_buang_air_kecil": 0,
    "keluar_darah_buang_air_kecil": 0,
    "urine_berwarna_gelap": 0,
    "urine_menguning": 0,
    "ketidaknyamanan_kandung_kemih": 0,
    "bau_busuk_dari_urine": 0,
    "ingin_buang_air_kecil_terus": 0,
    "air_kencing_berlebih": 0,
    "tangan_dan_kaki_dingin": 0,
    "berkeringat": 0,
    "obesity": 0
  },
  "kulit": {
    "memar": 0,
    "gatal": 0,
    "gatal_internal": 0,
    "ruam_kulit": 0,
    "benjolan_pada_kulit": 0,
    "kulit_kekuningan": 0,
    "bintik_bintik_merah_di_seluruh_tubuh": 0,
    "perubahan_warna_kulit_di_area_tertentu": 0,
    "jerawat_bernanah": 0,
    "komedo": 0,
    "menggaruk": 0,
    "pengelupasan_kulit": 0,
    "kulit_bersisik": 0,
    "kulit_melepuh": 0,
    "bekas_luka_berair": 0
  },
  "mental": {
    "anxiety": 0,
    "gelisah": 0,
    "depresi": 0,
    "mudah_tersinggung": 0,
    "tidak_berenergi": 0,
    "perubahan_suasana_hati": 0
  },
  "tangan": {
    "kuku_rapuh": 0,
    "celah_kecil_pada_kuku": 0,
    "peradangan_kuku": 0
  },
  "vital": {
    "gagal_hati_akut": 0,
    "jantung_berdetak_cepat": 0,
    "pembuluh_darah_bengkak": 0,
    "jantung_berdebar": 0,
    "otot_mengecil": 0,
    "otot_melemah": 0,
    "nyeri_otot": 0,
    "nyeri_sendi": 0,
    "nyeri_sendi_panggul": 0,
    "pembengkakan_sendi": 0,
    "kelenjar_getah_bening_membengkak": 0,
    "pembesaran_tiroid": 0,
    "kadar_gula_tidak_teratur": 0,
    "menerima_transfusi_darah": 0,
    "menerima_suntikan_yang_tidak_steril": 0,
    "penyakit_keturunan": 0,
    "berhubungan_diluar_nikah": 0,
    "menstruasi_yang_tidak_normal": 0
  },
  "kaki": {
    "kaki_bengkak": 0,
    "nyeri_lutut": 0,
    "varises": 0,
    "nyeri_saat_berjalan": 0
  }
};

const SymptomChecker = () => {
  const [symptoms, setSymptoms] = useState(initialSymptoms);

  const handleSymptomChange = (category, symptom, value) => {
    setSymptoms((prevSymptoms) => ({
      ...prevSymptoms,
      [category]: {
        ...prevSymptoms[category],
        [symptom]: parseInt(value, 10),
      },
    }));
  };

  return (
    <main>
      <h1 className='text-center mt-4 text-lg font-semibold'>Prediction Symptom</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/result">Result</Link>
        </li>
      </ul>
      <SymptomForm symptoms={symptoms} handleSymptomChange={handleSymptomChange} />
    </main>
  );
};

export default SymptomChecker;
