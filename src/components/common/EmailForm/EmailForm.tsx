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
import FadeContainer from '../FadeContainer/FadeContainer';

const cx = classNames.bind(styles);

const EmailForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<string>('');
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
    if (result) {
      reset();
      setStatus('이메일이 정상적으로 전송되었습니다.');
    } else {
      setStatus('이메일 전송에 실패했습니다.');
    }
  };

  // 입력값 실시간 감지
  const title = watch('title', '');
  const content = watch('content', '');
  const from = watch('from', '');
  const isAllFieldsFilled = !!title.trim() && !!content.trim() && !!from.trim();

  return (
    <div className={cx('contact')}>
      <FadeContainer>
        <form
          className={cx('form')}
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
                  label="Title"
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
                  label="Content"
                  required
                  rows={5}
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
                  label="Email"
                  required
                  type="email"
                  placeholder="이메일을 입력하세요"
                  helperText={fieldState.error ? fieldState.error.message : ''}
                />
              )}
            />
          </div>

          <div className={cx('form-footer')}>
            {status && <p className={cx('status')}>{status}</p>}
            <button
              className={cx('submit-btn')}
              type="submit"
              disabled={!isAllFieldsFilled}
            >
              send email
            </button>
          </div>
        </form>
      </FadeContainer>
      {isLoading && <LoadingSpinner />}
    </div>
  );
};

export default EmailForm;
