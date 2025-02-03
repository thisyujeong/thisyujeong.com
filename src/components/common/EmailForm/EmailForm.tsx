'use client';

import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ContactType } from '@/app/api/contact/route';
import { emailRegex } from '@/constants';
import { sendContactEmail } from '@/service/contact';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import TextField from '../TextField/TextField';
import Textarea from '../Textarea/Textarea';
import classNames from 'classnames/bind';
import styles from './EmailForm.module.scss';

const cx = classNames.bind(styles);

const EmailForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { control, handleSubmit, reset, watch } = useForm<ContactType>({
    mode: 'onSubmit',
    defaultValues: {
      title: '',
      content: '',
      from: '',
    },
  });

  const onSubmit = async (data: ContactType) => {
    setIsLoading(true);

    const { result } = await sendContactEmail(data);

    setIsLoading(false);
    if (result) reset();
  };

  // 입력값 실시간 감지
  const title = watch('title', '');
  const content = watch('content', '');
  const from = watch('from', '');
  const isAllFieldsFilled = !!title.trim() && !!content.trim() && !!from.trim();

  return (
    <>
      <form
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(onSubmit)(e);
        }}
      >
        <div className={cx('form-item')}>
          <Controller
            name="title"
            control={control}
            rules={{ required: '제목을 입력하세요' }}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                required
                type="text"
                placeholder="제목을 입력하세요"
                helperText={fieldState.error ? fieldState.error.message : ''}
              />
            )}
          />
        </div>
        <div className={cx('form-item')}>
          <Controller
            name="content"
            control={control}
            rules={{ required: '메세지를 입력하세요' }}
            render={({ field, fieldState }) => (
              <Textarea
                {...field}
                required
                placeholder="메세지를 입력하세요"
                helperText={fieldState.error ? fieldState.error.message : ''}
              />
            )}
          />
        </div>
        <div className={cx('form-item')}>
          <Controller
            name="from"
            control={control}
            rules={{
              required: '이메일을 입력하세요',
              pattern: {
                value: emailRegex,
                message: '정확한 이메일을 입력하세요',
              },
            }}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                required
                type="email"
                placeholder="이메일을 입력하세요"
                helperText={fieldState.error ? fieldState.error.message : ''}
              />
            )}
          />
        </div>

        <button type="submit" disabled={!isAllFieldsFilled}>
          전송
        </button>
      </form>
      {isLoading && <LoadingSpinner />}
    </>
  );
};

export default EmailForm;
